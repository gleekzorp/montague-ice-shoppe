import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import FooterLogo from "../../static/assets/images/white-logo.png";

export default class FooterContainer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="white-logo-footer">
                    <img src={FooterLogo} alt="new pic"/>
                </div>
                <div className="links-footer">
                    <hr className="line_1" />
                    <div className="nav-link"><NavLink exact to="/">HOME</NavLink></div>
                    {/* dot */}
                    <div className="nav-link"><NavLink exact to="/about">ABOUT US</NavLink></div>
                    {/* dot */}
                    <div className="nav-link"><NavLink exact to="/menu">MENU</NavLink></div>
                    {/* dot */}
                    <div className="nav-link"><NavLink exact to="/contact">CONTACT</NavLink></div>
                    <hr className="line_2" />
                </div>
            </div>
        )
    }
}