import React, { Component } from 'react';
import Message from './Message';

class Sardines extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <Message>
        <div>
          <h1>Sardines</h1>
        </div>
      </Message>
    );
  }
}
 
export default Sardines;