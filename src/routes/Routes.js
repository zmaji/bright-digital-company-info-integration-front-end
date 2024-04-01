import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from '../views/LandingPage';
import Register from '../views/Register';
import Install from '../views/Install';
import ThankYou from '../views/ThankYou';
import DashboardOverview from '../views/DashboardOverview';
import InstallScript from '../views/InstallScript';
import EnrichData from '../views/EnrichData';
import Profile from '../views/Profile';
import Activate from '../views/Activate';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/install" element={<Install />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/overview" element={<DashboardOverview />} />
        <Route path="/install-script" element={<InstallScript/>} />
        <Route path="/enrich-data" element={<EnrichData/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/activate" element={<Activate/>} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
