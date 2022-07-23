import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logIn } from '../../redux/auth/auth-operations';

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
      <form onSubmit={logInFormSubmit}>
        <label>
          Почта:
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChangeEmail}
          />
        </label>
        <label>
          Пароль:
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChangePassword}
          />
        </label>
        <button type="submit">Отправить</button>
      </form>
    </>
  );
}
