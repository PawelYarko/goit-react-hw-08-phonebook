import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import AppBar from '../AppBar/AppBar';


export default function Layout() {
  return (
    <>
        <h1>LayOut</h1>
        <AppBar />
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
    </>
  );
}