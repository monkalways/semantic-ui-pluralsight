import React from 'react';
import { Header, Segment } from 'semantic-ui-react';
import UserSettingsForm from './UserSettingsForm';

const UserSettingsPage = () => {
    return (
        <Segment padded>
            <Header as="h1">User Settings</Header>
            <UserSettingsForm />
        </Segment>
    );
}

export default UserSettingsPage;