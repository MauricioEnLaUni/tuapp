/**
 * @fileoverview Routing and loading file
 * 
 * Prefer lazy loading where possible.
 */
// React Imports
import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

// Imports
import HeaderAssets from './assets/Data/Header.Data';

// Lazy Imports
const GeneralLayout = lazy(() => import('./components/Layout/PrivateRouteLayout'));
const Login = lazy(() => import('./pages/PublicRoutes/Login'));
const Register = lazy(() => import('./pages/PublicRoutes/Register'));

import './App.css'

const App = () => (
  <Routes>
    <Route element={<GeneralLayout assets={ HeaderAssets } />}>
      <Route path={'/'} element={<Login />} />
      <Route path={'register'} element={<Register />} />
    </Route>
  </Routes>
);

export default App
