import React, { useLayoutEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ component: Component, allowedRoles, ...rest }: any) => {
  const userRole = useSelector((state: any) => state.auth.role);

if (!allowedRoles.includes(userRole)) {
  return <Navigate to="/login" />;
}

  return <Component {...rest} />;
}

export default ProtectedRoute;
