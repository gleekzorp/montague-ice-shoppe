import React, { Component } from 'react';
import NavigationContainer from './navigation-bar/navigation-container';

import Home from "./home";
import About from "./about-us";
import Menu from "./menu";
import Contact from "./contact-us";

export default class App extends Component {
  render() {
    return (
      <div className='app'>
                <Router>
                    <div>

                        <NavigationContainer />

                        <hr/>

                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/about-us" component={About} />
                            <Route path="/menu" component={Menu} />
                            <Route path="/contact-us" component={Contact} />
                        </Switch>
                    </div>
                </Router>
            </div>
    );
  }
}
