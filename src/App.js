import React from 'react';
import VendingMachine from './VendingMachine';
import Chips from './Chips';
import Sardines from './Sardines';
import Soda from './Soda';
import Food from './Food';
//import Meal from './Meal';
import { Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" render={() => <VendingMachine />} />
        <Route exact path="/chips" render={() => <Chips />} />
        <Route exact path="/sardines" render={() => <Sardines />} />
        <Route exact path="/soda" render={() => <Soda />} />
        <Route 
          exact 
          path="/food/:name"
          render={routeProps => <Food {...routeProps} />} />
{/* 
        <Route 
          exact 
          path="/food/:name" 
          render={routeProps => <Food name={routeProps.match.params.name} />} />
        
        <Route 
          exact 
          path="/food/:name" 
          render={routeProps => <Food {...routeProps} />}
        />
        <Route exact path="/food/:foodName/drink/:drinkName" component={Meal} />
        */}
        <Route render={()=> <h1>ERROR NOT FOUND MY FRIEND</h1>}/>
      </Switch>
    </div>
  );
}

export default App;
