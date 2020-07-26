import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import CreatePoint from './pages/CreatePoint';
import PointsList from './pages/PointsList';


const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Home} path="/" exact />
      <Route component={CreatePoint} path="/create-point" />
      {/* <Route component={UpdatePoint} path="/update-point" /> */}
      <Route component={PointsList} path="/points-list" />
    </BrowserRouter>
  );
}

export default Routes;
