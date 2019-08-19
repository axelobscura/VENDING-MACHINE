import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class FoodSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleChange(evt){
    this.setState({
      query: evt.target.value
    });
  }
  handleClick(){
    //do something like pushing to db
    alert("SAVED YOUR FOOD TO DB!");
    //redirect somewhere else
    this.props.history.push(`/food/${this.state.query}`)
  }
  render() { 
    return (
      <div>
        <h1>SEARCH FOR A FOOD</h1>
        <input 
          type="text" 
          placeholder="search for a food" 
          value={this.state.query} 
          onChange={this.handleChange}
        />
        <Link to={`/food/${this.state.query}`}>GO THERE</Link>
        <button onClick={this.handleClick}>SAVE NEW FOOD!</button>
      </div>
    );
  }
}
 
export default FoodSearch;