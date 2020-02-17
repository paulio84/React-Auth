import React, { Component } from 'react';
import { connect } from 'react-redux';
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

  static getDerivedStateFromProps(nextProps, prevState) {
    if (!nextProps.authExists) {
      nextProps.history.push('/signin');
    }
    return prevState;
  }

  componentDidUpdate(prevProps) {
    if (prevProps.profile.message !== this.props.profile.message && this.props.authExists) {
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
    const { profile, messageError } = this.props;

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
  authExists: PropTypes.bool,
  profile: PropTypes.object,
  getProfileMessageAction: PropTypes.func,
  updateProfileMessageAction: PropTypes.func,
  messageError: PropTypes.string,
  history: PropTypes.object
};

const mapStateToProps = (state) => {
  return {
    authExists: !!state.firebase.auth && !!state.firebase.auth.uid,
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
