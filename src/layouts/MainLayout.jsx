import React from 'react';
import { Outlet } from 'react-router-dom';

function MainLayout() {
  return (
    <div className='antialiased text-gray-900 bg-white min-h-screen'>
      <Outlet />
    </div>
  );
}

export default MainLayout;