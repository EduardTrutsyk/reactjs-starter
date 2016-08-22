import React, { PureComponent } from 'react';
import NavLink from '../components/NavLink/NavLink';

class App extends PureComponent {
  static propTypes = {
    children: React.PropTypes.element,
  };

  render() {
    return (
      <div className="page-container">
        <header>
          <h1>React App!</h1>
        </header>
        <nav>
          <ul>
            <li>
              <NavLink to="/admin">Admin</NavLink>
            </li>
            <li>
              <NavLink onlyActiveOnIndex to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
            <li>
              <NavLink to="/profile/admin">Profile</NavLink>
            </li>
          </ul>
        </nav>
        <section>{this.props.children}</section>
        <footer>
          <h4>Footer</h4>
        </footer>
      </div>
    );
  }
}

export default App;
