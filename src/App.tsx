import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ProtectedRoute from './Components/ProtectedRoute';
import { routes } from './roles-and-routes/routes';
import NotFoundComponent from './Components/NotFoundComponent';
import Redirect from './Components/Redirect';

const App = () => {
  return (
    <Routes>
      {routes.map(route => (
        <Route 
          key={route.path}
          path={route.path}
          element={<ProtectedRoute 
            component={route.component}
            allowedRoles={route.allowedRoles}
          />}
        />
      ))}
      <Route path="/" element={<Redirect toUrl="/dashboard" />} />
      <Route path="*" element={<NotFoundComponent />} />
    </Routes>
  )
}

export default App;
