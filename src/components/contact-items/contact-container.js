import React, { Component } from 'react';

import ContactForm from './contact-form';


export default class Contact extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="App">
        <ContactForm />

      </div>
    );
  }
}



