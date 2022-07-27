import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { getIsLoggerIn } from '../../redux/auth/auth-selectors';

export default function PublicRoute() {
  const isLoggerIn = useSelector(getIsLoggerIn);
  return isLoggerIn ? <Navigate to="/notes" /> : <Outlet />;
}