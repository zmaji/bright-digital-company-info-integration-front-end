import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import LandingPage from '../views/LandingPage';
import DashboardOverview from '../views/DashboardOverview';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<DashboardOverview />} />
        <Route path="/overview" element={<DashboardOverview />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
