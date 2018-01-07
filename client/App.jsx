import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import GetEmail from './GetEmail.jsx';
import GetMessage from './GetMessage.jsx';


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
  }

moveEmailDataToApp(email, password) {
  this.setState({
    senderEmail: email,
    password: password,
    emailEntered: true
  });
}

moveMessageDataToApp(sendTo, subject, message) {
  this.setState({
    sendTo: sendTo,
    subject: subject,
    message: message
  });
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
          {this.state.emailEntered &&
            <GetMessage/>
          }
        </div>
      </div>
    );
  }
}

export default App;
