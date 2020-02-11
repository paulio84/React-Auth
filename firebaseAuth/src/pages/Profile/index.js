import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import PropTypes from 'prop-types';

import Layout from '../../shared/components/Layout';

const Profile = ({ auth, profile }) => {
  if (!auth.uid) {
    return <Redirect to='/signin' />;
  }

  const profilePic = Math.floor(Math.random() * 10);

  return (
    <Layout title="Profile">
      <div>
        <img
          src={`https://randomuser.me/api/portraits/med/lego/${profilePic}.jpg`}
          alt='profile pic'
        />
        <p>{`${profile.firstname} ${profile.lastname}`}</p>
        <p>{profile.occupation}</p>
        <p>{profile.message}</p>
      </div>
    </Layout>
  );
};
Profile.propTypes = {
  auth: PropTypes.object,
  profile: PropTypes.object
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  };
};

export default connect(mapStateToProps)(Profile);
