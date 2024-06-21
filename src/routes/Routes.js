import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from '../views/LandingPage';
import Register from '../views/Register';
import Install from '../views/Install';
import ThankYou from '../views/ThankYou';
import DashboardOverview from '../views/DashboardOverview';
import InstallScript from '../views/InstallScript';
import EnrichData from '../views/EnrichData';
import SearchCompany from '../views/SearchCompany';
import Companies from '../views/Companies';
import Profile from '../views/Profile';
import Activate from '../views/Activate';
import CompanyDetail from '../views/CompanyDetail';
import Properties from '../views/Properties';
import Admin from '../views/Admin';
import Users from '../views/Users';
import UserDetail from '../views/UserDetail';
import UserCreate from '../views/UserCreate';
import SyncCompany from '../views/SyncCompany';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/install" element={<Install />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/overview" element={<DashboardOverview />} />
        <Route path="/enrich-audience" element={<InstallScript/>} />
        <Route path="/enrich-company" element={<EnrichData/>} />
        <Route path="/sync-company" element={<SyncCompany/>} />
        <Route path="/search-company" element={<SearchCompany/>} />
        <Route path="/search-company/search-results" element={<Companies/>} />
        <Route path="/search-company/search-results/company-detail" element={<CompanyDetail/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/activate" element={<Activate/>} />
        <Route path="/properties" element={<Properties/>} />
        <Route path="/admin" element={<Admin/>} />
        <Route path="/users" element={<Users/>} />
        <Route path="/users/:userId" element={<UserDetail/>} />
        <Route path="/users/create" element={<UserCreate/>} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
