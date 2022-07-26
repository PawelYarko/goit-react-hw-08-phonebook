import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from 'react-redux';
import { getIsLoggerIn } from '../../redux/auth/auth-selectors';

export default function PrivateRoute(){
    const isLoggerIn = useSelector(getIsLoggerIn);
    return isLoggerIn ? <Outlet /> : <Navigate to="/" />;
}
