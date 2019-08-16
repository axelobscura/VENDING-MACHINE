import React, { Component } from 'react';

class Food extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() {
    const name = this.props.match.params.name;
    //const url = `https://source.unsplash.com/1600x900/?${this.props.name}`;
    const url = `https://source.unsplash.com/1600x900/?${name}`;
    return (
      <div>
        <h1>I Love to eat {name}</h1>
        <div>
          <img src={url} alt={name} width="600"/>
        </div>
      </div>
    );
  }
}
 
export default Food;