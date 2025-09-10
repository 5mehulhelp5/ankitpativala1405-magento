import { BrowserRouter, Route } from 'react-router-dom';

import HomePageContainer from './route/Homepage/HomePage.container';

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Route path="/homepage" component={ <HomePageContainer /> } />
        </BrowserRouter>
    );
}
