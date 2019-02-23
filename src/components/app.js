import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import NavigationContainer from "./navigation-bar/navigation-container";
import FooterContainer from "./footer/footer-container";
import Home from "./home/home";
import MainMenuPage from "./menu/main";
import About from "./about/about";
import Contact from "./contact-items/contact-container";


export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Router>
          <div>
            <NavigationContainer />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/menu" component={MainMenuPage} />
              <Route path="/contact" component={Contact} />
            </Switch>
          </div>
        </Router>
        <FooterContainer />
      </div>
    );
  }
}






