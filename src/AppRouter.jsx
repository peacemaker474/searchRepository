import React from 'react';
import { Routes, Route } from 'react-router-dom';
import IssuesPage from './pages/IssuesPage';
import MainPage from './pages/MainPage';
import ReposPage from './pages/ReposPage';

function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/repos" element={<ReposPage />} />
            <Route path="/issues" element={<IssuesPage />} />
        </Routes>
    )
}

export default AppRouter;