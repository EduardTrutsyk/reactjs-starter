import config from '../../config.json';
import React, { Component } from 'react';

import styles from './Greeter.scss';

class Greeter extends Component {
  render() {
    return (
      <div className="greeter">
        <p>{config.greetText}</p>
      </div>
    );
  }
}

export default Greeter;
