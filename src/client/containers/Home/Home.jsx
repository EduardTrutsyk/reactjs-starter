import React, { Component } from 'react';
import Todo from '../../components/Todo';
import CounterButton from '../../components/CounterButton';

class Home extends Component {
  render() {
    return (
      <div className="home-page">
        <CounterButton as="counter1" />
        <CounterButton as="counter2" />

        <Todo as="todos1"/>

        <Todo as="todos2"/>
      </div>
    );
  }
}


export default Home;
