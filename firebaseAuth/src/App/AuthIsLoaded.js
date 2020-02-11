import { useSelector } from 'react-redux';
import { isLoaded } from 'react-redux-firebase';

const AuthIsLoaded = ({ children }) => {
  const auth = useSelector(state => state.firebase.auth);
  if (isLoaded(auth)) return children;

  return null;
};

export default AuthIsLoaded;