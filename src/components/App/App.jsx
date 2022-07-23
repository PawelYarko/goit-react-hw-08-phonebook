import { Routes, Route } from 'react-router-dom';
import Layout from '../Layout/Layout';
import { lazy } from 'react';

const RegisterView = lazy(() => import('../../views/Register/RegisterView'));
const LoginView = lazy(() => import('../../views/Login/LoginView'));
const ContactsView = lazy(() => import('../../views/Contacts/ContactsView'));

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="register" element={<RegisterView />} />
          <Route path="login" element={<LoginView />} />
          <Route path="contacts" element={<ContactsView />} />
          <Route path="*" element={<Layout />} />
        </Route>
      </Routes>
    </>
  );
}
