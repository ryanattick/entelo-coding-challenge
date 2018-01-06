import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class getEmail extends Component {

  render() {
    return (
      <div style={{margin: '20px'}}>
        <h4 style={{textAlign: 'center'}}>In order to send an email for you, we'll need some information.</h4>
        <form style={{marginTop: '60px'}}>
          <div className="form-group">
            <label>Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter the email address you'd like to send a message from."/>
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Enter the password for that email address."/>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

export default getEmail;
