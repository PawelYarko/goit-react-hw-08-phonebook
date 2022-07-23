import { NavLink } from 'react-router-dom';
import s from './AppBar.module.css';

export default function AppBar () {
  return (
    <>
        <h1>AppBar</h1>
        <nav className={s.navContainer}>
            <NavLink className={s.nav} to="/">Home</NavLink >
            <NavLink className={s.nav} to="register">Register</NavLink >
            <NavLink className={s.nav} to="login">Login</NavLink >
            <NavLink className={s.nav} to="contacts">Contacts</NavLink >
      </nav>
    </>
  );
};
