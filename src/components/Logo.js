import React, { Component } from 'react';
import '../styling/Logo.css';
import brain from './brain.jpg';
import Tilt from 'react-tilt';

class Logo extends Component {
  render() {
    return (
      <div className="ma2 mt0 logo">
        <Tilt className="Tilt " options={{ max: 25 }} style={{ height: 70, width: 120 }} >
          <div className="Tilt-inner "> <img className="br3" src={brain} alt="logo" height="70px" width="120px" /> </div>
        </Tilt>
      </div>
    );
  }
}

export default Logo;
