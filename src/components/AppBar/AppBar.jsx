import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsLoggerIn } from '../../redux/auth/auth-selectors'; 
import LogOutView from '../../views/Logout/LogoutView';
// import { blue } from '@mui/material/colors';
// import SvgIcon from '@mui/material/SvgIcon';
import s from './AppBar.module.css';

export default function AppBar() {
  const isLoggerIn = useSelector(getIsLoggerIn);

  // function HomeIcon(props) {
  //   return (
  //     <SvgIcon {...props}>
  //       <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
  //     </SvgIcon>
  //   );
  // }

  return (
    <div className={s.container}>
      <nav className={s.navContainer}>
        <div className={s.userNav}>
          <NavLink className={s.nav} to="/">
          {/* <HomeIcon className={s.icon} sx={{ color: blue[500] }} /> */}
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
    </div>
  );
}
