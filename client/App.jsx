import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import GetEmail from './GetEmail.jsx';
import GetMessage from './GetMessage.jsx';
import EmailSent from './EmailSent.jsx';
import EmailError from './EmailError.jsx';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      senderEmail: '',
      password: '',
      sendTo: '',
      subject: '',
      text: '',
      emailEntered: false
    };
    this.moveEmailDataToApp = this.moveEmailDataToApp.bind(this);
    this.moveMessageDataToApp = this.moveMessageDataToApp.bind(this);
    this.sendEmailDataToAPI = this.sendEmailDataToAPI.bind(this);
    this.sendMessageDataToAPI = this.sendMessageDataToAPI.bind(this);
  }

moveEmailDataToApp(email, password) {
  this.setState({
    senderEmail: email,
    password: password,
    emailEntered: true
  }, () => {this.sendEmailDataToAPI(this.state.senderEmail, this.state.password)});
}

moveMessageDataToApp(sendTo, subject, message) {
  this.setState({
    sendTo: sendTo,
    subject: subject,
    message: message
  }, () => {this.sendMessageDataToAPI(this.state.sendTo, this.state.subject, this.state.message)});
}

sendEmailDataToAPI(email, password) {
  $.post( '/api/userEmail', {senderEmail: email, password: password} )
    .done(function() {
      console.log('Email added!')
    })
    .fail(function(err) {
      console.log('There was an error adding email.', err)
    })
}

sendMessageDataToAPI(sendTo, subject, text) {
  $.post( '/api/sendMessage', {sendTo: sendTo, subject: subject, text: text} )
    .done(function() {
      console.log('Email sent!');
    })
    .fail(function(err) {
      console.log(err);
    })
  this.setState({
    emailEntered: 'sent'
  })
}


  render() {
    return (
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <div style={{minHeight: '100px', width: '50%', backgroundColor: 'white', margin: '10px'}}>
          <h1 style={{textAlign: 'center'}}>Let's send some email!</h1>
        </div>
        <div style={{minHeight: '500px', width: '50%', backgroundColor: 'white', margin: '10px'}}>
          {!this.state.emailEntered &&
            <GetEmail moveEmailDataToApp={this.moveEmailDataToApp}/>
          }
          {this.state.emailEntered === true &&
            <GetMessage moveMessageDataToApp={this.moveMessageDataToApp}/>
          }
          {this.state.emailEntered === 'sent' &&
            <EmailSent sendTo={this.state.sendTo}/>
          }
        </div>
      </div>
    );
  }
}

export default App;
