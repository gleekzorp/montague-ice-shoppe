import React, { Component } from 'react';

import '../../style/contact-form.scss';

export default class ContactForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullname: '',
      email: '',
      message: ''
    }
  }

  handleFormSubmit( event ) {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <div className="Contact-Form">
  
        <div>
          <form action="#">
            <label>Full Name</label>
            <input type="text" id="fullname" name="fullname" placeholder="Full Name" 
              value={this.state.fullname}
              onChange={e => this.setState({ fullname: e.target.value })}
            />
        
            <label>Email</label>
            <input type="email" id="email" name="email" placeholder="Email" 
              value={this.state.email}
              onChange={e => this.setState({ email: e.target.value })}
            />
        
            <label>Message</label>
            <textarea id="subject" name="subject" placeholder="Your message"
              onChange={e => this.setState({ message: e.target.value })}
              value={this.state.message}
            ></textarea>

            <input type="submit" onClick={e => this.handleFormSubmit(e)} value="Submit" />
          </form>
        </div>

      </div>
    );
  }
}



