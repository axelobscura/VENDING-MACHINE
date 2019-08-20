import React, { Component } from 'react';
import './Navbar.css';
import { NavLink, withRouter } from 'react-router-dom';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleBack = this.handleBack.bind(this);
  }
  handleLogin(){
    alert("LOGGED YOU IN");
    this.props.history.push("/food/salmon");
  }
  handleBack(){
    alert("BABY GO BACK");
    this.props.history.goBack();
  }
  render() { 
    return ( 
      <div className="Navbar">
        <NavLink exact activeClassName="Navbar-active" to="/">Home</NavLink>
        <NavLink exact activeClassName="Navbar-active" to="/chips">Chips</NavLink>
        <NavLink exact activeClassName="Navbar-active" to="/soda">Soda</NavLink>
        <NavLink exact activeClassName="Navbar-active" to="/sardines">Sardines</NavLink>

        <button onClick={this.handleLogin}>LOG IN</button>
        <button onClick={this.handleBack}>BACK</button>
      </div>
     );
  }
}
 
export default withRouter(Navbar);