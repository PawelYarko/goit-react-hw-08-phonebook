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