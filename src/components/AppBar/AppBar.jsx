import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import s from './AppBar.module.css';
import  authSelectors from '../../redux/auth/auth-selectors'; //???

export default function AppBar () {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  console.log(authSelectors.getIsLoggedIn)
  return (
    <>
        <h1>AppBar</h1>
        <nav className={s.navContainer}>
            <NavLink className={s.nav} to="/">Home</NavLink >
            {isLoggedIn ? <NavLink className={s.nav} to="register">Register</NavLink > : <NavLink className={s.nav} to="login">Login</NavLink >} 
            <NavLink className={s.nav} to="contacts">Contacts</NavLink >
      </nav>
    </>
  );
};
