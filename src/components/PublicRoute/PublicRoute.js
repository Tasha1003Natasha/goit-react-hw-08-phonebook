import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

export const PublicRoute = ({ children }) => {
  const { state } = useLocation();
  const accessToken = useSelector(state => state.auth.token);

  return accessToken ? (
    <Navigate to={state?.pathname ? state.pathname : '/'} />
  ) : (
    children
  );
};
