import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsLoggerIn } from '../../redux/auth/auth-selectors'; //???
import LogOutView from '../../views/Logout/LogoutView'
import s from './AppBar.module.css';

export default function AppBar() {
  const isLoggerIn = useSelector(getIsLoggerIn);
  console.log(isLoggerIn);
  return (
    <>
      <nav className={s.navContainer}>
        <div className={s.userNav}>
          <NavLink className={s.nav} to="/">
            Home
          </NavLink>
          {isLoggerIn && <NavLink className={s.nav} to="/notes">
            Notes
          </NavLink>}
        </div>
        <div className={s.registerNav}>
          <NavLink className={s.nav} to="/register">
            Register
          </NavLink>
          {isLoggerIn ? (
            <LogOutView />
          ) : (
            <NavLink className={s.nav} to="/login">
              Login
            </NavLink>
          )}
        </div>
      </nav>
    </>
  );
}
