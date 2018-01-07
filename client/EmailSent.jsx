import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class EmailSent extends Component {

  render() {
    return (
      <div style={{margin: '20px'}}>
        <h2 style={{textAlign: 'center'}}>Your email to {this.props.sendTo} has been sent!</h2>
        <iframe src="https://giphy.com/embed/gVYk3rI8YjtAI" style={{display: 'block', margin: 'auto'}} width="480" height="271" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
      </div>
    );
  }
}

export default EmailSent;
