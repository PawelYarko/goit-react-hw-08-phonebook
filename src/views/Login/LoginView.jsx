import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { logIn } from '../../redux/auth/auth-operations';
import s from './LoginView.module.css';

//test email
// email: "pawelqwe@mail.com"
// name: "pawelqwe"
// password: "pawelqwe"

export default function LoginView() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleChangeEmail = e => {
    setEmail(e.currentTarget.value);
  };

  const handleChangePassword = e => {
    setPassword(e.currentTarget.value);
  };

  const logInFormSubmit = e => {
    e.preventDefault();
    dispatch(logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <form onSubmit={logInFormSubmit} className={s.form}>
          <TextField
            type="email"
            name="email"
            value={email}
            onChange={handleChangeEmail}
            className={s.input}
            id="demo-helper-text-misaligned"
            label="Email"
            sx={{
              mt: 3,
            }}
          />
          <TextField
            type="password"
            name="password"
            value={password}
            onChange={handleChangePassword}
            className={s.input}
            id="demo-helper-text-misaligned"
            label="Password"
            sx={{
              mt: 5,
            }}
          />
        <Button 
        variant="outlined" 
        type="submit" 
        className={s.button}
        sx={{
          mt: 5,
        }}
        >
          Send
        </Button>
      </form>
    </>
  );
}
