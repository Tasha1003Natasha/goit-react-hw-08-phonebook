import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, useLocation } from 'react-router-dom';
import '../..//index.css';

export const PublicNavigation = () => {
  const location = useLocation();

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <NavLink
              to="/"
              state={{ from: location }}
              className={({ isActive }) => (isActive ? 'active' : 'nav')}
            >
              Home page
            </NavLink>
          </Navbar.Brand>
          <Nav
            className="me-auto"
            style={{
              fontSize: '20px',
            }}
          >
            <NavLink
              style={{ marginLeft: '200px' }}
              to="/login"
              state={{ from: location }}
              className={({ isActive }) => (isActive ? 'active' : 'nav')}
            >
              Log In
            </NavLink>

            <NavLink
              style={{ marginLeft: '200px' }}
              to="/register"
              state={{ from: location }}
              className={({ isActive }) => (isActive ? 'active' : 'nav')}
            >
              Sign In
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
