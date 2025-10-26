// components/MainLayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar.jsx';

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        {/* This is where the child route component (Dashboard, Veddes, etc.) will render */}
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;