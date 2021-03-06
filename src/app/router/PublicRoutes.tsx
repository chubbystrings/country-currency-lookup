import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { checkIsLoggedIn } from '../utils/checkIsLoggedIn';

const PublicRoutes = ({ ...rest }) => {
  return <>{checkIsLoggedIn() ? <Redirect to='/home' /> : <Route {...rest} />}</>;
};

export default PublicRoutes;