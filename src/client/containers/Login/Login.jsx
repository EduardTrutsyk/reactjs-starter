import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as UserActions from '../../actions/user.actions';

class Login extends Component {

  constructor(props) {
    super(props);
    this.onSubmit = ::this.onSubmit;
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.actions.login({ name: e.target.elements[0].value });
  }

  render() {
    return (
      <div className="login-page">
        <h3>Login page</h3>

        <form onSubmit={this.onSubmit}>
          <input placeholder="login" type="text"/>
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

Login.contextTypes = {
  router: React.PropTypes.object.isRequired,
};

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(UserActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
