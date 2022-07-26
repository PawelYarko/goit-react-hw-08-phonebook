import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../redux/auth/auth-operations';
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

  // useEffect(()=>{
  //     setState
  // },[])

  const registerFormSubmit = e => {
    e.preventDefault();
    dispatch(register({name, email, password}));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <>
    <h1>Register</h1>
      <form onSubmit={registerFormSubmit} className={s.form}>
        <label className={s.label}>
          Имя:
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChangeName}
            className={s.input}
          />
        </label>
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
