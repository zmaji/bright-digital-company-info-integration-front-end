import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from '../views/LandingPage';
import Register from '../views/Register';
import Install from '../views/Install';
import DashboardOverview from '../views/DashboardOverview';
import InstallScript from '../views/InstallScript';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/install" element={<Install />} />
        <Route path="/overview" element={<DashboardOverview />} />
        <Route path="/install-script" element={<InstallScript/>} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
