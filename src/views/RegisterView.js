import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signIn } from 'redux/auth/auth-operations';
import { toast } from 'react-toastify';
import { Loader } from 'components/Loader/Loader';

const RegisterView = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.auth.loading);

  const handleChange = event => {
    const { value, name } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (name.trim() === '' || email.trim() === '' || password.trim() === '') {
      return toast.error('Please fill in all fields!');
    } else if (password.length < 7) {
      return toast.info('Passwords must be at least 7 characters long!');
    }
    dispatch(signIn({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <h1
        style={{
          textAlign: 'center',
          marginTop: '10px',
        }}
      >
        Register View
      </h1>
      <Form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="name"
            name="name"
            value={name}
            placeholder="Enter name"
            onChange={handleChange}
            style={{ width: '500px' }}
          />

          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={email}
            placeholder="Enter email"
            onChange={handleChange}
            style={{ width: '500px' }}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            onChange={handleChange}
            style={{ width: '500px' }}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Sign In
        </Button>
        {isLoading && <Loader />}
      </Form>
    </>
  );
};

export default RegisterView;
