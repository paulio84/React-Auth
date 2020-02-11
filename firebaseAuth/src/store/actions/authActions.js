import { SIGNUP_SUCCESS, SIGNUP_FAIL } from '../../shared/utils/Constants';

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
      .then(() => {
        dispatch(dispatchSignUpSuccess());
      })
      .catch(err => {
        dispatch(dispatchSignUpFailure(err));
      });
  };
};

function dispatchSignUpSuccess() {
  return {
    type: SIGNUP_SUCCESS
  };
}

function dispatchSignUpFailure(error) {
  return {
    type: SIGNUP_FAIL,
    error
  };
}