import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class VendingMachine extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div>
        <Link exact to="/soda">SODA</Link>
        <Link exact to="/chips">CHIPS</Link>
        <Link exact to="/sardines">SARDINES</Link>
        <h1>VENDING MACHINE</h1>
      </div>
    );
  }
}
 
export default VendingMachine;