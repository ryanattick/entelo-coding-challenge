import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import GetEmail from './getEmail.jsx';


class App extends Component {
  

  render() {
    return (
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <div style={{minHeight: '100px', width: '50%', backgroundColor: 'white', margin: '10px'}}>
          <h1 style={{textAlign: 'center'}}>Let's send some email!</h1>
        </div>
        <div style={{minHeight: '500px', width: '50%', backgroundColor: 'white', margin: '10px'}}>
          <GetEmail/>
        </div>
      </div>
    );
  }
}

export default App;
