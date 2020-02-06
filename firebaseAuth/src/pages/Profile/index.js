import React, { Component } from 'react';

class Profile extends Component {
  render() {
    return (
      <div>
        <h1>Profile</h1>
        <div>
          <img src="https://randomuser.me/api/portraits/med/lego/5.jpg" alt='profile pic' />
          <p>Name</p>
          <p>Occupation</p>
          <p>Message</p>
        </div>
      </div>
    );
  }
}

export default Profile;
