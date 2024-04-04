import { useDispatch } from 'react-redux';
import { removeAuthToken } from '../store/authSlice';
import { removeUserData } from '../store/userSlice';

const useLogout = () => {
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(removeAuthToken());
    dispatch(removeUserData());
  };
  return logout;
};

export default useLogout;
