import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router'
import useAuth from '../hooks/useAuth';

const AdminRoute = () => {
  const user = useAuth();

  // const location = useLocation();
  // console.log(location);

  return user?.isAdmin ? <Outlet/> : <Navigate to={'/'} replace/>
}

export default AdminRoute