import React, { Component } from 'react';

import Contact from './contact-items/contact-container';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Contact />
      </div>
    );
  }
}
