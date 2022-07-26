import { Routes, Route } from 'react-router-dom';
import Layout from '../Layout/Layout';
import NotesView from '../../views/Notes/NotesView';
import PrivateNotesView from '../../views/Notes/PrivateNotesView';
// import PublicRoute from '../../views/PublicRoute/PublicRoute';
import { lazy } from 'react';

// const NotesView = lazy(() => import('../../views/Notes/NotesView'));
const RegisterView = lazy(() => import('../../views/Register/RegisterView'));
const LoginView = lazy(() => import('../../views/Login/LoginView'));
const LogOutView = lazy(() => import('../../views/Logout/LogoutView'));

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route path="notes" element={<NotesView/>}/> */}
          <Route path="notes" element={<PrivateNotesView />}>
            <Route element={<NotesView />} />
          </Route>
          {/* <Route path="register" restricted element={<PublicRoute />}>
            <Route element={<RegisterView />} />
          </Route>
          <Route path="login" restricted element={<PublicRoute />}>
            <Route element={<LoginView />} />
          </Route> */}
          <Route path="register" element={<RegisterView />} />
          <Route path="login" element={<LoginView />} />
          <Route path="logout" element={<LogOutView />} />
        </Route>
        <Route path="*" element={<Layout />} />
      </Routes>
    </>
  );
}
