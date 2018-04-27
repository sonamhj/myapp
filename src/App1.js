import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import User from './User';
//import AppBar from './AppBar.js'


class App extends Component {
	constructor(props){
		super(props);
		this.state={
			name:"ram",
			address:"kathmandu"
		}
	}
	person ={
		name: 'ram',
		address: 'kathmandu'
	}
	age = 20

  render() {
    return (
      <div className="App" >
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo"/>
      
        <h1 className="App-title">Welcome to react</h1>
        </header>
        <p className="App-intro">
         to get started ,edit <code> src/App.js</code> and save to reload.
         </p>
         <User detail={this.props.person} age={this.age} />
        
      </div>

    );
  }
}
export default App;