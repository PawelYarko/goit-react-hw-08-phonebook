import { Routes, Route } from 'react-router-dom';
import Layout from '../Layout/Layout';
import NotesView from '../../views/Notes/NotesView'
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
          <Route path="notes" element={<NotesView />} />
          <Route path="register" element={<RegisterView />} />
          <Route path="login" element={<LoginView />} />
          <Route path="contacts" element={<LogOutView />} />
        </Route>
        <Route path="*" element={<Layout />} />
      </Routes>
    </>
  );
}
