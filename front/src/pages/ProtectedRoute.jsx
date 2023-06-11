import { Route, Navigate } from 'react-router-dom';
import { authService } from '../services';
import { useEffect, useState } from 'react';

const ProtectedRoute = ({ allowedRoles, component: Component, ...rest }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
      authService.getCurrentUser().then((data) => {
          setUser(data);
          console.log('USER', data);
          }).catch((err) => {
          setUser(null);
          });
      }, []);

  return (
    <Route
      {...rest}
      element={
        user && allowedRoles.includes(user.role) ? (
          <Component />
        ) : (
          <Navigate to="/notauthorize" replace />
        )
      }
    />
  );
};

export default ProtectedRoute;

