import '../index.css';
import { Routes, Route } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
// import HomeView from 'views/HomeView';
// import RegisterView from 'views/RegisterView';
// import ContactsView from 'views/ContactsView';
// import LoginView from 'views/LoginView';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from 'react-redux';
import { getRefresh } from 'redux/auth/auth-operations';
import { useEffect } from 'react';
import { PublicRoute } from './PublicRoute/PublicRoute';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';
import { lazy, Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Loader } from './Loader/Loader';

const HomeViewLazy = lazy(() => import('views/HomeView'));
const RegisterViewLazy = lazy(() => import('views/RegisterView'));
const LoginViewLazy = lazy(() => import('views/LoginView'));
const ContactsViewLazy = lazy(() => import('views/ContactsView'));
const NotFoundViewLazy = lazy(() => import('views/NotFoundView'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRefresh());
  }, [dispatch]);

  return (
    <Suspense
      fallback={
        <div>
          <Loader />
        </div>
      }
    >
      <Navigation />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<HomeViewLazy />} />
        {/* <Route path="/register" element={<RegisterViewLazy />} /> */}
        {/* <Route path="/login" element={<LoginViewLazy />} /> */}
        {/* <Route path="/contacts" element={<ContactsViewLazy />} /> */}

        <Route
          path="/register"
          element={
            <PublicRoute>
              <RegisterViewLazy />
            </PublicRoute>
          }
        />

        <Route
          path="/login"
          element={
            <PublicRoute redirectTo="/contacts">
              <LoginViewLazy />
            </PublicRoute>
          }
        />

        <Route
          path="/contacts"
          element={
            <PrivateRoute>
              <ContactsViewLazy />
            </PrivateRoute>
          }
        />

        <Route
          path="*"
          element={
            <PrivateRoute>
              <NotFoundViewLazy />
            </PrivateRoute>
          }
        />
      </Routes>
    </Suspense>
  );
};
