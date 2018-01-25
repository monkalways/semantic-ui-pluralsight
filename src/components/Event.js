import React from 'react';
import { Card, Icon, Image, Rating } from 'semantic-ui-react';

const eventHeaderStyle = {
    marginBottom: 10
};

const Event = ({ event }) => {
    return (
        <Card>
            <Image src={event.image} />
            <Card.Content>
                <Card.Header style={eventHeaderStyle}>
                    {event.name}
                </Card.Header>
                <Card.Meta>
                    <Rating defaultRating={event.rating} maxRating={5} icon="star" disabled />
                </Card.Meta>
                <Card.Description>
                    {event.description}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <div className="left floated">
                    <Icon name="calendar" />
                    {event.date}
                </div>
                <div className="right floated">
                    <Icon name="map" />
                    {event.location}
                </div>
            </Card.Content>
        </Card>
    );
}

export default Event;