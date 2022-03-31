import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { StatsPreview } from './Component/StatsPreview/';

export default function MainRoutes  (){
    return (
        <Routes>
            <Route path="/" element={<StatsPreview />} />
        </Routes>
    );
}