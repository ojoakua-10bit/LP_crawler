import React, { Component } from 'react';

class Sidebar extends Component {
    render() {
        return (
            <nav id="my-scroll-spy" className="sidenav col-sm-2 fixed">
                <ul className="nav nav-pills nav-stacked">
                    <li className="active"><a href="#gsmarena">Section 1</a></li>
                    <li><a href="#">Section 2</a></li>
                    <li><a href="#">Section 3</a></li>
                </ul>
            </nav>
        );
    }
}

export default Sidebar;