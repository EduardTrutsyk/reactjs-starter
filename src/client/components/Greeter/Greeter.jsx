import config from '../../config.json';
import React from 'react';

import './Greeter.scss';

class Greeter extends React.Component {
  render() {
    return (
      <div className="greeter">
        <p>{config.greetText}</p>
      </div>
    );
  }
}

export default Greeter;
