import { dispatchAction } from '../../shared/utils/Helpers';
import {
  GET_MESSAGE_SUCCESS,
  GET_MESSAGE_FAIL,
  MESSAGE_UPDATE_SUCCESS,
  MESSAGE_UPDATE_FAIL
} from '../../shared/utils/Constants';

export const getProfileMessageAction = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    const uid = getState().firebase.auth.uid;
    const firestore = firebase.firestore();

    firestore
      .collection('messages')
      .where('authorId', '==', uid)
      .get()
      .then(snapshot => {
        if (snapshot.docs.length && !snapshot.empty) {
          // update the profile with the users message
          const { text } = snapshot.docs[0].data();
          firebase.updateProfile({ message: text });

          dispatch(dispatchAction(GET_MESSAGE_SUCCESS));
        }
      })
      .catch(err => dispatch(dispatchAction(GET_MESSAGE_FAIL, err)));
  };
};

export const updateProfileMessageAction = (message) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    const firestore = firebase.firestore();
    const uid = getState().firebase.auth.uid;

    firestore
      .collection('messages')
      .where('authorId', '==', uid)
      .get()
      .then(snapshot => {
        if (!snapshot.docs.length && snapshot.empty) {
          const { firstname, lastname } = getState().firebase.profile;
          return firestore
            .collection('messages')
            .doc()
            .set({
              authorId: uid,
              authorFirstName: firstname,
              authorLastName: lastname,
              text: message
            });
        } else if (!message) {
          return firestore
            .collection('messages')
            .doc(snapshot.docs[0].id)
            .delete();
        } else {
          return firestore
            .collection('messages')
            .doc(snapshot.docs[0].id)
            .update({
              text: message
            });
        }
      })
      .then(() => {
        firebase.updateProfile({ message });
        dispatch(dispatchAction(MESSAGE_UPDATE_SUCCESS));
      })
      .catch(err => dispatch(dispatchAction(MESSAGE_UPDATE_FAIL, err)));
  };
};