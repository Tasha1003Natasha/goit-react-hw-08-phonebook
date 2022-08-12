import Button from 'react-bootstrap/Button';
import '../../index.css';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/auth-operations';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const userEmail = useSelector(state => state.auth?.user?.email);
  const isLogin = useSelector(state => state.auth.isLoggerIn);

  return (
    <>
      {isLogin && (
        <div className="user__item">
          <a className="user__link" href="mailto:info@devstudio.com">
            {userEmail}
          </a>
        </div>
      )}
      <Button
        type="button"
        style={{ marginRight: '20px' }}
        onClick={() => dispatch(logOut())}
        ariant="primary"
      >
        Logout
      </Button>
    </>
  );
};
