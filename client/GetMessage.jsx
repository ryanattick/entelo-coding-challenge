import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class GetMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sendTo: '',
      subject: '',
      message: ''
    };
    this.handleSendToInput = this.handleSendToInput.bind(this);
    this.handleSubjectInput = this.handleSubjectInput.bind(this);
    this.handleMessageInput = this.handleMessageInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSendToInput(event) {
    this.setState({
      sendTo: event.target.value
    });
  }

  handleSubjectInput(event) {
    this.setState({
      subject: event.target.value
    });
  }

  handleMessageInput(event) {
    this.setState({
      message: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.moveMessageDataToApp(this.state.sendTo, this.state.subject, this.state.message);
  }



  render() {
    return (
      <div style={{margin: '20px'}}>
        <form>
          <div className="form-group">
            <label>Sent To:</label>
            <input type="email" className="form-control" placeholder="name@example.com"/>
          </div>
          <div className="form-group">
            <label>Subject:</label>
            <input type="text" className="form-control" placeholder="subject"/>
          </div>
          <div className="form-group">
            <label>Message:</label>
            <textarea className="form-control" rows="3" placeholder="Type your message text here."></textarea>
          </div>
        </form>
      </div>
    );
  }
}

export default GetMessage;
