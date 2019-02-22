import React, { Component } from 'react';

import NavigationContainer from "./navigation-bar/navigation-container";
import Home from "./home";
import MainMenuPage from "./menu/main"
import About from "./about";
import Contact from "./contact-items/contact-container";


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
                            <Route path="/about" component={About} />
                            <Route path="/menu" component={Menu} />
                            <Route path="/contact" component={Contact} />
                        </Switch>
                    </div>
                </Router>
            </div>
      

      </div>
    );
  }
}
