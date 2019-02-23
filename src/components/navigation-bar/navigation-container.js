import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Logo from '../../../static/assets/images/blue-logo.png';

export default class NavigationContainer extends Component {
  render() {
    return (
      <div className="nav-container">
          <div className="blue-logo">
              <img src={Logo} alt="logo"/>
          </div>
          <div className="links">
              <div className="nav-link"><NavLink exact to="/">HOME</NavLink></div>

              <div className="nav-link"><NavLink exact to="/about">ABOUT US</NavLink></div>

              <div className="nav-link"><NavLink exact to="/menu">MENU</NavLink></div>

              <div className="nav-link"><NavLink exact to="/contact">CONTACT</NavLink></div>
          </div>
          <hr />
      </div>
    );
  }
}