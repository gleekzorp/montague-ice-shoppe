import React, { Component } from 'react';
import FooterContainer from './navigation-bar/navigation-container';

export default class App extends Component {
  render() {
    return (
      <div className='app-footer'>
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






