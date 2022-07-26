import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logIn } from '../../redux/auth/auth-operations';
import s from './LoginView.module.css';

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
      <h1>Login</h1>
      <form onSubmit={logInFormSubmit} className={s.form}>
        <label className={s.label}>
          Почта:
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChangeEmail}
            className={s.input}
          />
        </label>
        <label className={s.label}>
          Пароль:
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChangePassword}
            className={s.input}
          />
        </label>
        <button type="submit" className={s.button}>Отправить</button>
      </form>
    </>
  );
}
