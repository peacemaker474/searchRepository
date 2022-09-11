import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import ReposPage from './pages/ReposPage';

function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/repos" element={<ReposPage />} />
        </Routes>
    )
}

export default AppRouter;