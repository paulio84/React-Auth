import { AUTH_SUCCESS, AUTH_FAIL } from '../../shared/utils/Constants';

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
      .then(() => dispatch(dispatchAuthSuccess()))
      .catch(err => dispatch(dispatchAuthFail(err)));
  };
};

export const signOutAction = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase.auth().signOut()
      .then(() => dispatch(dispatchAuthSuccess()))
      .catch(err => dispatch(dispatchAuthFail(err)));
  };
};

function dispatchAuthSuccess() {
  return {
    type: AUTH_SUCCESS
  };
}

function dispatchAuthFail(error) {
  return {
    type: AUTH_FAIL,
    error
  };
}
