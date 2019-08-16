import React, { Component } from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div className="Navbar">
        <NavLink exact activeClassName="Navbar-active" to="/">Home</NavLink>
        <NavLink exact activeClassName="Navbar-active" to="/chips">Chips</NavLink>
        <NavLink exact activeClassName="Navbar-active" to="/soda">Soda</NavLink>
        <NavLink exact activeClassName="Navbar-active" to="/sardines">Sardines</NavLink>
      </div>
     );
  }
}
 
export default Navbar;