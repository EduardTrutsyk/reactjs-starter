import React, { Component } from 'react';
import { NavLink } from '../NavLink/NavLink';

class NotFound extends Component {
  render() {
    return (
      <div className="not-found-page">
        <p>Page not found. Ho to <NavLink to="/">home page</NavLink></p>
      </div>
    );
  }
}

export default NotFound;
