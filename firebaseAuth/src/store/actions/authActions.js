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
          initials: firstname[0] + lastname[0],
          occupation: ''
        });
      })
      .then(() => dispatch(dispatchAuthAction(AUTH_SUCCESS)))
      .catch(err => dispatch(dispatchAuthAction(AUTH_REGISTER_FAIL, err)));
  };
};

export const signInAction = (userCredentials) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    const { email, password } = userCredentials;

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => dispatch(dispatchAuthAction(AUTH_SUCCESS)))
      .catch(err => dispatch(dispatchAuthAction(AUTH_LOGIN_FAIL, err)));
  };
};

export const signOutAction = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase.auth().signOut()
      .then(() => dispatch(dispatchAuthAction(AUTH_SUCCESS)))
      .catch(err => dispatch(dispatchAuthAction(AUTH_LOGOUT_FAIL, err)));
  };
};

function dispatchAuthAction(type, payload) {
  if (payload === undefined)
    return { type };
  else
    return { type, payload };
}
