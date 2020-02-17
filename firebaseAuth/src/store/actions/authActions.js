import { dispatchAction } from '../../shared/utils/Helpers';
import {
  AUTH_SUCCESS,
  AUTH_LOGIN_FAIL,
  AUTH_LOGOUT_FAIL,
  AUTH_REGISTER_FAIL
} from '../../shared/utils/Constants';

export const signUpAction = (newUser) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    const firestore = firebase.firestore();

    const { firstname, lastname, email, password } = newUser;

    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(response => {
        return firestore.collection('users').doc(response.user.uid).set({
          firstname,
          lastname,
          initials: firstname[0] + lastname[0]
        });
      })
      .then(() => dispatch(dispatchAction(AUTH_SUCCESS)))
      .catch(err => dispatch(dispatchAction(AUTH_REGISTER_FAIL, err)));
  };
};

export const signInAction = (userCredentials) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    const firestore = firebase.firestore();
    const { email, password } = userCredentials;

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(userCredential => {
        const { user } = userCredential;

        // we need to get the users message
        return firestore
          .collection('messages')
          .where('authorId', '==', user.uid)
          .get();
      })
      .then(snapshot => {
        // update the profile with the users message
        const { text } = snapshot.docs[0].data();
        firebase.updateProfile({ message: text });

        dispatch(dispatchAction(AUTH_SUCCESS));
      })
      .catch(err => dispatch(dispatchAction(AUTH_LOGIN_FAIL, err)));
  };
};

export const signOutAction = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase.auth().signOut()
      .then(() => dispatch(dispatchAction(AUTH_SUCCESS)))
      .catch(err => dispatch(dispatchAction(AUTH_LOGOUT_FAIL, err)));
    firebase.logout();
  };
};
