import React, { Component } from 'react';
import Todo from '../../components/Todo';

class Home extends Component {
  render() {
    return (
      <div className="home-page">
        <Todo />
      </div>
    );
  }
}


export default Home;
