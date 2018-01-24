import React from 'react';
import { Card } from 'semantic-ui-react';

import Event from './Event';
import events from '../data/events';

const EventsPage = () => {
    return (
        <Card.Group doubling stackable itemsPerRow={3}>
            { events.map( event => (<Event key={event.name} event={event} />) ) }
        </Card.Group>
    );
}

export default EventsPage;