import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import authOperations from '../../redux/auth/auth-operations';

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

  // useEffect(()=>{
  //     setState
  // },[])

  const registerFormSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.register({name, email, password}));
  };

  return (
    <>
    <h1>Register</h1>
      <form onSubmit={registerFormSubmit}>
        <label>
          Имя:
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChangeName}
          />
        </label>
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
