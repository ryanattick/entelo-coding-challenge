const nodemailer = require('nodemailer');
const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();


const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/../dist"));


let senderEmail, password, sendTo, subject, text;

router.use(function(req, res, next) {
  console.log('Server is running.');
  next();
});

app.use('/api', router);

// Test Route
router.get('/', function(req, res) {
  res.send({message: 'Welcome to our API!'});
});

router.route('/userEmail')
  .post(function(req, res) {
    senderEmail = req.body.senderEmail
    password = req.body.password
    res.status(200).send({email: senderEmail, password: password})
    console.log({email: senderEmail, password: password});
  })


  router.route('/sendMessage')
    .post(function(req, res) {
      sendTo = req.body.sendTo;
      subject = req.body.subject;
      text = req.body.text;

      let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: senderEmail,
          pass: password
        }
      });

      let mailOptions = {
        from: senderEmail,
        to: sendTo,
        subject: subject,
        text: text
      };

      transporter.sendMail(mailOptions, function (err, info) {
        if (err) {
          res.send({err: err});
          console.log('There was an error.', err);
        }
        else {
          res.send({info: info});
          console.log('Mail was sent!', info)
        }
      })
      if (!senderEmail) {
        res.send('Unfortunately, no sender email has been provided. Please use the /userEmail endpoint to enter an email address and password from which to send the email. Thank you!')
      }
    })

app.listen(8080, function() {
  console.log('listening on port 8080!');
});

// {
// 	"sendTo": "spencer.attick@gmail.com",
// 	"subject": "YEAHHH?",
// 	"text": "IT WORKS!"
// }
