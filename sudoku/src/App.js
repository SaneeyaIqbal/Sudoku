import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Box extends Component {
  constructor(props){
    super(props);
      this.state={};
  }


  render() {
    return (
      <div>
        {this.props.number ? (
          <div> Box has number {this.props.number}</div>
        ) : (
          <input type="text"/>
        )}
      </div>
     
    )
  }
}

class App extends Component {
  render() {
    return(
      <div className="App">
        <Box number={2} />
        <Box answer={2} />
      </div> 
       )
  }
}

export default App;
