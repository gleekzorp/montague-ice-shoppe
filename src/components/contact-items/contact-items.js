import React, { Component } from "react";

export default class ContactItems extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div> 
        <div className="Contact-Info">
        
          <h3>Hours & Location</h3>
          
          <div className="phone">
            (801) 768-4984
          </div>

          <div className="address">
            3003 North Thanksgiving Way<br />
            Lehi, UT 84043
          </div>

          <div className="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.2346124334267!2d-111.88937474879214!3d40.42580357926267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x875280272527f2a9%3A0xe1ff6d3a38112e05!2sThanksgiving+Point+Ice+Cream+Shop!5e0!3m2!1sen!2sus!4v1550874308899" frameBorder="0" style={{ width: "400", height: "250"}}></iframe>
          </div>

        </div>

      </div>
    );
  }
}