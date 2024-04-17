import { useDispatch } from 'react-redux';
import { removeAuthToken } from '../store/authSlice';
import { removeUserData } from '../store/userSlice';

const useLogout = () => {
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(removeAuthToken());
    dispatch(removeUserData());
    localStorage.setItem('rememberMe', 'false');
  };
  return logout;
};

export default useLogout;
