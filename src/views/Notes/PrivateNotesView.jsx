import { Navigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { getIsLoggerIn } from '../../redux/auth/auth-selectors';

export default function PrivateNotesView({children}){
    const isLoggerIn = useSelector(getIsLoggerIn);
    return isLoggerIn ? children : <Navigate to="/login" />;
}
