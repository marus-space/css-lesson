import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import FixedLayout from '../routes/FixedLayout';
import ResponsiveLayout from '../routes/ResponsiveLayout';
import AdaptiveLayout from '../routes/AdaptiveLayout';
import ResponsiveAdaptiveLayout from '../routes/ResponsiveAdaptiveLayout';
import Flexbox from '../routes/Flexbox';
import Grid from '../routes/Grid';

const AppRouter: React.FC = () => (
  <Routes>
    <Route path="/" element={<Navigate to="/fixed" />} />
    <Route path="/fixed" element={<FixedLayout />} />
    <Route path="/responsive" element={<ResponsiveLayout />} />
    <Route path="/adaptive" element={<AdaptiveLayout />} />
    <Route path="/responsive-adaptive" element={<ResponsiveAdaptiveLayout />} />
    <Route path="/flexbox" element={<Flexbox />} />
    <Route path="/grid" element={<Grid />} />
  </Routes>
);

export default AppRouter;
