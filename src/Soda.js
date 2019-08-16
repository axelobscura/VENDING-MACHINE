import React, { Component } from 'react';
import Message from './Message';

class Soda extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <Message>
        <div>
          <h1>Soda</h1>
        </div>
      </Message>
    );
  }
}
 
export default Soda;