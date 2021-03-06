import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Message from './Message';
import FoodSearch from "./FoodSearch";

class VendingMachine extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div>
        <Message>
          <Link exact to="/soda">SODA</Link>
          <Link exact to="/chips">CHIPS</Link>
          <Link exact to="/sardines">SARDINES</Link>
        </Message>
        <Message>
          <h1>VENDING MACHINE</h1>
          
        </Message>
        <FoodSearch />
      </div>
    );
  }
}
 
export default VendingMachine;