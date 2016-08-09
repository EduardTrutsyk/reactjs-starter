import React, { Component } from 'react';

class Profile extends Component {
  render() {
    return (
      <div className="profile-page">
        <p>Page <code>/profile/{this.props.params.userName}</code></p>

        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Profile;
