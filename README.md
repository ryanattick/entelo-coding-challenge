# Entelo Coding Challenge
This project was developed in order to allow users to easily send gmail to themselves and others.

## Set up for API ONLY
If you are only interested in using the API without a frontend, please follow these instructions:
1. Be sure to have Nodejs installed on your machine.
2. Clone a copy of the project to your machine.
3. Navigate to the project from your command line.
4. Run $ npm install.
5. Run $ npm run start (to start the server).
6. Send a POST request to http://localhost:8080/api/userEmail with the following data structure:
  {
    senderEmail: 'emailToSendFrom@something.com',
    password: 'passwordForThisEmail'
  }
7. Send a POST request to http://localhost:8080/api/sendMessage with the following data structure:
  {
    sendTo: 'emailToSendTo@something.com',
    subject: 'Whatever subject you would like the email to have',
    text: 'The body or main message of the email to be would go here.'
  }

## Set Up WITH Frontend
There are several steps for the setup and use of this project as an API with a frontend. They are as follows:
1. Be sure to have Nodejs installed on your machine.
2. Clone a copy of the project to your machine.
3. Navigate to the project from your command line.
4. Run $ npm install.
5. Run $ npm run build (to start webpack).
6. Run $ npm run start (to start the server).
7. Navigate to http://localhost:8080/ in your browser.
8. Start seding emails!

### Note: In order to communicate with the node-mailer package used in this project, you will need to adjust the settings for your gmail account as follows.
![screen shot 2018-01-07 at 12 26 36 pm](https://user-images.githubusercontent.com/23665784/34653897-2eb31506-f3a8-11e7-98bb-39c090700442.png)

## Built With
- Javascript
- Node.js
- Express
- node-mailer
- Bootstrap
