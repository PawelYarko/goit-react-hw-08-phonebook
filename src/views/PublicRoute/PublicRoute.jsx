// import {Route, Navigate} from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { getIsLoggerIn } from '../../redux/auth/auth-selectors';


// export default function PublicRoute({
//     children, 
//     restricted = false,
//     ...routeProps }){
//     const isLoggerIn = useSelector(getIsLoggerIn);
//     const shouldRedirect = isLoggerIn && restricted;
//     return(
//         <Route {...routeProps}>
//         {shouldRedirect ? <Navigate to="/login" /> : children}
//         </Route>
//     );
// }

import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { getIsLoggerIn } from '../../redux/auth/auth-selectors';

export default function PublicRoute() {
  const isLoggerIn = useSelector(getIsLoggerIn);
  return isLoggerIn ? <Navigate to="/notes" /> : <Outlet />;
}