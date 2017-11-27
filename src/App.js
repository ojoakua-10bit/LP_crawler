import React, { Component } from 'react';
import './App.css';
import Artikel from "./Artikel";

class App extends Component {
    render() {
        return (
            <div className="AppMain col-sm-10 text-left">
                <Artikel/>
            </div>
        );
    }
}

export default App;
