import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const NotFoundView = () => {
  const isLogin = useSelector(state => state.auth.isLoggerIn);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLogin) {
      navigate('/contacts');
      return;
    } else {
      navigate('/login');
      return;
    }
  });

  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <img
        src="https://internetdevels.ua/blog/creative-404-error-pages"
        alt="not found"
        style={{ width: 300 }}
      />
      <p>Opsss! This page does not exist</p>

      <NavLink to="/">Home page</NavLink>
    </div>
  );
};

export default NotFoundView;
