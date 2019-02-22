import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class NavigationContainer extends Component {
    render() {
        return (
            <div className="nav-container">
                <div className="blue-logo">
                    <img src="blue-logo.png" alt="changeLogos"/>
                </div>
                <div className="links">
                    <hr className="line_1" />
                    <div className="nav-link"><NavLink exact to="/">HOME</NavLink></div>
                    {/* dot */}
                    <div className="nav-link"><NavLink exact to="/about-us">ABOUT US</NavLink></div>
                    {/* dot */}
                    <div className="nav-link"><NavLink exact to="/menu">MENU</NavLink></div>
                    {/* dot */}
                    <div className="nav-link"><NavLink exact to="/contact-us">CONTACT</NavLink></div>
                    <hr className="line_2" />
                </div>
            </div>
        )
    }
}