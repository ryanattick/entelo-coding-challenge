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
  res.json({message: 'Welcome to our API!'});
});

router.route('/userEmail')
  .post(function(req, res) {
    senderEmail = req.body.senderEmail
    password = req.body.password
    res.status(200).send({email: senderEmail, password: password})
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
        }
        else {
          res.send({info: info});
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




// Build a real web api that I can use to send an email to myself. Host it somewhere so I can play with it and make sure it actually sends a real email.
//
// I will make a POST request to the URL you give me and it will have a JSON body that looks like:
// { to: ‘myemail@example.com’, subject: “hello”, body: “world” }
//
//
//
// Guidelines
// - commit at the beginning, at the end, and often in between
// - feel free to use libraries, saas tools and platforms
// - write your own code, don’t copy-paste something from the internet
// - there’s no time limit but please do this all in one sitting if possible
// - put your result on github or bitbucket in a public repo
