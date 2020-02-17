import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import {
  getProfileMessageAction,
  updateProfileMessageAction
} from '../../store/actions/messageActions';

import Button from '../../shared/components/Form/Controls/Button';
import Input from '../../shared/components/Form/Controls/Input';
import Layout from '../../shared/components/Layout';

class Profile extends Component {
  profilePic = Math.floor(Math.random() * 10);

  constructor(props) {
    super(props);
    this.state = { message: this.props.profile.message || '' };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.profile.message !== this.props.profile.message) {
      this.props.getProfileMessageAction();
      this.setState({
        message: this.props.profile.message
      });
    }
  }

  handleOnChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleOnSubmit = e => {
    e.preventDefault();
    this.props.updateProfileMessageAction(this.state.message);
  }

  render() {
    const { auth, profile, messageError } = this.props;

    if (!auth.uid) {
      return <Redirect to='/signin' />;
    }

    return (
      <Layout title="Profile">
        <div>
          <img
            src={`https://randomuser.me/api/portraits/med/lego/${this.profilePic}.jpg`}
            alt='profile pic' />
          <p><span>Name</span>{`${profile.firstname} ${profile.lastname}`}</p>
          <div>
            <form onSubmit={this.handleOnSubmit}>
              <Input
                id="message"
                type="text"
                name="message"
                value={this.state.message}
                onChange={this.handleOnChange} />
              <Button type="submit" text="Save">
                {messageError ? <p>{messageError}</p> : null}
              </Button>
            </form>
          </div>
        </div>
      </Layout>
    );
  }
}
Profile.propTypes = {
  auth: PropTypes.object,
  profile: PropTypes.object,
  getProfileMessageAction: PropTypes.func,
  updateProfileMessageAction: PropTypes.func,
  messageError: PropTypes.string
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
    messageError: state.message.messageError
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProfileMessageAction: () => dispatch(getProfileMessageAction()),
    updateProfileMessageAction: (message) => dispatch(updateProfileMessageAction(message))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
