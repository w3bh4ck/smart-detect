import React, { Component } from 'react';
import logoStyle from '../styling/Logo.css';
import brain from './brain.jpg';
import Tilt from 'react-tilt';

class Logo extends Component {
  render() {
    return (
      <div className="ma2 mt0 logo">
        <Tilt className="Tilt" options={{ max: 25 }} style={{ height: 250, width: 250 }} >
          <div className="Tilt-inner shadow-4"> <img className="br3" src={brain} alt="logo" height="100px" width="150px" /> </div>
        </Tilt>
      </div>
    );
  }
}

export default Logo;
