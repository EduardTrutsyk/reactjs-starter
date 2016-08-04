import React from 'react';
import { connect } from 'react-redux';
import { ROUTING } from '../../middlewares/redirect';

export default function requireAuthentication(Component) {
  class AuthenticatedComponent extends React.Component {
    componentWillMount() {
      this.checkAuth(this.props.user);
    }
    componentWillReceiveProps(nextProps) {
      this.checkAuth(nextProps.user);
    }
    checkAuth(user) {
      if (!user.isAuthenticated) {
        this.props.dispatch({
          type: ROUTING,
          payload: {
            method: 'replace',
            nextUrl: '/login',
          },
        });
      }
    }

    render() {
      if (!this.props.user.isAuthenticated) return null;

      return (
        <Component {...this.props} />
      );
    }
  }

  AuthenticatedComponent.propTypes = {
    user: React.PropTypes.object,
  };

  function mapStateToProps(state) {
    return {
      user: state.user,
    };
  }

  return connect(mapStateToProps)(AuthenticatedComponent);
}
