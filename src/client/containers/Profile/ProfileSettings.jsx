import React, { Component } from 'react';

class ProfileSettings extends Component {
  render() {
    return (
      <div className="settings">
        <p>Page <code>/profile/{this.props.params.userName}/settings</code></p>
      </div>
    );
  }
}

export default ProfileSettings;
