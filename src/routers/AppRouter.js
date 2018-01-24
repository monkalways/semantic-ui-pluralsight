import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Container, Segment } from 'semantic-ui-react';

import EventsPage from '../components/EventsPage';
import HomePage from '../components/HomePage';
import SiteMenu from '../components/SiteMenu';
import Footer from '../components/Footer';
import UserSettingsPage from '../components/UserSettingsPage';

const AppRouter = () => (
    <BrowserRouter>
        <Container>
            <SiteMenu />
            <Segment padded="very" basic>
                <Switch>
                    <Route path="/" component={HomePage} exact={true} />
                    <Route path="/events" component={EventsPage} />
                    <Route path="/user-settings" component={UserSettingsPage} />
                </Switch>
                <Footer />
            </Segment>
        </Container>
    </BrowserRouter>
);

export default AppRouter;