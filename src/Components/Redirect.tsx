import React, { useEffect, useLayoutEffect } from 'react';
import { Navigate } from 'react-router-dom';

function Redirect({ toUrl }: any) {

  return <Navigate to={toUrl} />
}

export default Redirect;
