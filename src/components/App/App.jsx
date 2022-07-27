import { Routes, Route, Navigate  } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AppBar from '../AppBar/AppBar';
import NotesView from '../../views/Notes/NotesView';
import PrivateRoute from '../../views/Notes/PrivateRoute';
import PublicRoute from '../../views/PublicRoute/PublicRoute';
import RegisterView from '../../views/Register/RegisterView';
import LoginView from '../../views/Login/LoginView';
import LogOutView from '../../views/Logout/LogoutView';
import { getIsLoadingCurUser } from '../../redux/auth/auth-selectors';
import { fetchCurrentUser } from '../../redux/auth/auth-operations';
import s from './App.module.css';


export default function App() {
  const dispatch = useDispatch();
  const isLoadingCurUser = useSelector(getIsLoadingCurUser);

  useEffect(()=>{
    dispatch(fetchCurrentUser());
  },[dispatch])


  return ( 
    <>
      <AppBar />
      {isLoadingCurUser &&
      <div className={s.container}>
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
      </Routes>
      </div>
      }
    </>
  );
}
