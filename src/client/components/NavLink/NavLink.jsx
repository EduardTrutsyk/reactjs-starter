import React, { PureComponent } from 'react';
import { Link } from 'react-router';

class NavLink extends PureComponent {
  render() {
    return (
      <Link {...this.props} activeClassName="active"/>
    );
  }
}

export default NavLink;
