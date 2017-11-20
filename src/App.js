import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Artikel from "./Artikel";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Artikel/>
        <p>test</p>
      </div>
    );
  }
}

export default App;
