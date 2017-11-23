import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Artikel from "./Artikel";

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">CrawlTest</h1>
                </header>
                <Artikel/>
            </div>
        );
    }
}

export default App;
