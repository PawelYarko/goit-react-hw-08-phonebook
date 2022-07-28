import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/auth-operations';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import s from './Register.module.css';

export default function RegisterView() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleChangeName = e => {
    setName(e.currentTarget.value);
  };

  const handleChangeEmail = e => {
    setEmail(e.currentTarget.value);
  };

  const handleChangePassword = e => {
    setPassword(e.currentTarget.value);
  };

  const registerFormSubmit = e => {
    e.preventDefault();
    dispatch(register({name, email, password}));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <form onSubmit={registerFormSubmit} className={s.form}>
        <TextField
            type="text"
            name="name"
            value={name}
            onChange={handleChangeName}
            className={s.input}
            id="demo-helper-text-misaligned"
            label="Name"
            sx={{
              mt: 5,
            }}
          />
        <TextField
            type="email"
            name="email"
            value={email}
            onChange={handleChangeEmail}
            className={s.input}
            id="demo-helper-text-misaligned"
            label="Email"
            sx={{
              mt: 5,
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
