import React from 'react';
import NavLink from '../components/NavLink/NavLink';

//import Perf from 'react-addons-perf';

//window.Perf = Perf;

const App = (props) => (
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
    <section>{props.children}</section>
    <footer>
      <h4>{new Date().toDateString()}</h4>
    </footer>
  </div>
);

App.propTypes = {
  children: React.PropTypes.element,
};

export default App;
