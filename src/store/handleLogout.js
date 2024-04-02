import { useDispatch } from 'react-redux';
import { removeAuthToken } from '../store/authSlice';

const useLogout = () => {
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(removeAuthToken());
  };
  return logout;
};

export default useLogout;
