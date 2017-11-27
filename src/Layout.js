import React, { Component } from 'react';
import App from "./App";
import Sidebar from "./Sidebar"

class Layout extends Component {
    render() {
        return (
            <div className="content">
                <App />
                <Sidebar />
            </div>
        );
    }
}

export default Layout;