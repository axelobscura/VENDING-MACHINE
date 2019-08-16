import React, { Component } from 'react';

class Meal extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() {
    const foodName = this.props.match.params.foodName;
    const drinkName = this.props.match.params.drinkName;
    const foodurl = `https://source.unsplash.com/1600x900/?${foodName}`;
    const drinkurl = `https://source.unsplash.com/1600x900/?${drinkName}`;
    return (
      <div>
        <h1>THIS IS MY MEAL</h1>
        <h2>{foodName} and {drinkName}</h2>
        <img src={foodurl} alt={foodName} width="600"/>
        <img src={drinkurl} alt={drinkName} width="600"/>
      </div>
    );
  }
}
 
export default Meal;