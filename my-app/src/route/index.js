import React from 'react';
import { Route, Routes } from 'react-router-dom';

import HomePageContainer from 'Route/Homepage/HomePage.container';

export default function AppRoutes() {
    return (
        <Routes>
            { /* Default Homepage */ }
            <Route path="/homepage" component={ <HomePageContainer /> } />

            { /* Example: Add other routes here */ }
            { /* <Route path="/about" component={AboutPageContainer} /> */ }
        </Routes>
    );
}
