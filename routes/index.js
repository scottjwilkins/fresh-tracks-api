var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var auth = require('../credentials.js');
var transporter = nodemailer.createTransport({service: 'Gmail', auth})

function mail(data){
  var mailOptions = {
      from: 'scott <scottjeffreywilkins@gmail.com>',
      to: 'scottjeffreywilkins@gmail.com',
      subject: 'Fresh Tracks Proposal',
      text: data
    }
  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log("***** errors *****");
      console.log(error);
    } else {
      console.log("***** email sent *****");
      console.log(info.response);
    }
  })
}

router.post('/', function(req, res, next) {
  console.log(req.body)
});
router.get('/', function(req, res, next) {
  res.send(auth);
});
module.exports = router;
