import { Routes, Route, Navigate  } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AppBar from '../AppBar/AppBar';
import NotesView from '../../views/Notes/NotesView';
import PrivateRoute from '../../views/Notes/PrivateRoute';
import { getIsLoadingCurUser } from '../../redux/auth/auth-selectors';
import { fetchCurrentUser } from '../../redux/auth/auth-operations';
import PublicRoute from '../../views/PublicRoute/PublicRoute';
import { lazy } from 'react';

// const NotesView = lazy(() => import('../../views/Notes/NotesView'));
const RegisterView = lazy(() => import('../../views/Register/RegisterView'));
const LoginView = lazy(() => import('../../views/Login/LoginView'));
const LogOutView = lazy(() => import('../../views/Logout/LogoutView'));

export default function App() {
  const dispatch = useDispatch();
  const isLoadingCurUser = useSelector(getIsLoadingCurUser);

  useEffect(()=>{
    dispatch(fetchCurrentUser());
  },[dispatch])


  return (isLoadingCurUser && 
    <>
      <AppBar />
      <Routes>
      <Route path="/" element={<PublicRoute />}>
          <Route path="/" element={<Navigate replace to="/login" />} />
          <Route path="/login" element={<LoginView />} />
          <Route path="/register" element={<RegisterView />} />
          <Route path="/logout" element={<LogOutView />} />
      </Route>
      <Route path="/" element={<PrivateRoute />}>
          <Route path="/" element={<Navigate replace to="/notes" />} />
          <Route path="/notes" element={<NotesView />} />
      </Route>
      <Route path="*" element={<Navigate replace to="/" />} />


        {/* <Route path="/" element={<Layout />}>
          <Route path="notes" element={<NotesView/>}/>
          <Route path="notes" element={<PrivateNotesView />}>
            <Route element={<NotesView />} />
          </Route>
          <Route path="register" restricted element={<PublicRoute />}>
            <Route element={<RegisterView />} />
          </Route>
          <Route path="login" restricted element={<PublicRoute />}>
            <Route element={<LoginView />} />
          </Route>
          <Route path="register" element={<RegisterView />} />
          <Route path="login" element={<LoginView />} />
          <Route path="logout" element={<LogOutView />} />
        </Route>
        <Route path="*" element={<Layout />} /> */}
      </Routes>
    </>
  );
}
