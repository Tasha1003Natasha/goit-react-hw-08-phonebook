import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import '../..//index.css';

export const PublicNavigation = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? 'active' : 'nav')}
            >
              Home page
            </NavLink>
          </Navbar.Brand>
          <Nav className="me-auto">
            <NavLink
              style={{ marginLeft: '200px' }}
              to="/login"
              className={({ isActive }) => (isActive ? 'active' : 'nav')}
            >
              Log In
            </NavLink>

            <NavLink
              style={{ marginLeft: '200px' }}
              to="/register"
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
