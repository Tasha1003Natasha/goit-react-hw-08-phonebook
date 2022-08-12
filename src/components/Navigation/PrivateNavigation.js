// import { useDispatch } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../..//index.css';
import { NavLink, useLocation } from 'react-router-dom';
import { UserMenu } from 'components/UserMenu/UserMenu';

export const PrivateNavigation = () => {
  const location = useLocation();

  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand className="nav-privat">
            <NavLink
              to="/"
              state={{ from: location }}
              className={({ isActive }) => (isActive ? 'active' : 'nav-privat')}
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
              to="/contacts"
              state={{ from: location }}
              className={({ isActive }) => (isActive ? 'active' : 'nav-privat')}
            >
              Contacts
            </NavLink>
          </Nav>
        </Container>
        <UserMenu />
      </Navbar>
    </>
  );
};
