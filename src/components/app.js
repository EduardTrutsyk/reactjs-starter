import React from 'react';
import Greeter from './Greeter/Greeter';
import Counter from './Counter/Counter';

import styles from './app.scss';

export default class App extends React.Component {
  render() {
    return (
      <div className="app">
        <h1>React App Test!</h1>
        <Greeter />
        <Counter />
      </div>
    );
  }
}
