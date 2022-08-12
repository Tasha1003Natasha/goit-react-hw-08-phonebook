import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

export const PrivateRoute = ({ children }) => {
  const { pathname } = useLocation();
  const accessToken = useSelector(state => state.auth.token);

  return accessToken ? children : <Navigate to="/login" state={{ pathname }} />;
};
