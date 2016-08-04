import React, { Component } from 'react';

class Admin extends Component {

  static onEnter(nextState, replace) {
    // const login = window.localStorage.getItem('rr_login');
    // if (login !== 'admin') {
    //   replace('/');
    // }
  }

  render() {
    return (
      <div className="admin-page">
        <p>Page
          <code>/admin</code>
        </p>
      </div>
    );
  }
}

export default Admin;
