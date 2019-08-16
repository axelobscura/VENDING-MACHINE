import React, { Component } from 'react';
import './Message.css';

class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <div className="Message">
        {this.props.children}
      </div>
    );
  }
}
 
export default Message;