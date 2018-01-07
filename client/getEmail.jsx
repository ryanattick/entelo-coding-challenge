import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class GetEmail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      senderEmail: '',
      password: ''
    };
    this.handleEmailInput = this.handleEmailInput.bind(this);
    this.handlePasswordInput = this.handlePasswordInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEmailInput(event) {
    this.setState({
      senderEmail: event.target.value
    });
  }

  handlePasswordInput(event) {
    this.setState({
      password: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.moveEmailDataToApp(this.state.senderEmail, this.state.password);
  }



  render() {
    return (
      <div style={{margin: '20px'}}>
        <h4 style={{textAlign: 'center'}}>In order to send an email for you, we'll need some information.</h4>
        <form style={{marginTop: '60px'}}>
          <div className="form-group">
            <label>Email address</label>
            <input type="email" className="form-control" onChange={this.handleEmailInput} placeholder="Enter the email address you'd like to send a message from."/>
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" onChange={this.handlePasswordInput} placeholder="Enter the password for that email address."/>
          </div>
          <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default GetEmail;
