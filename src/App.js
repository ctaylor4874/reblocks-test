import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Routes from "./router/routes";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Routes />
        {this.props.children}
      </div>
    );
  }
}

export default App;
