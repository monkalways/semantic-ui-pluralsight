import React from 'react';

import { Button, Divider, Form, Header, Icon, Input, Rating, TextArea } from 'semantic-ui-react';

const RatingForm = () => {
    return (
        <Form>
            <Divider horizontal>
                <Header>
                    <Icon name="comment"/>
                    Tell Us What You Think
                </Header>
            </Divider>
            <Form.Group>
                <Form.Field width={8}>
                    <Input placeholder="Name..." />
                </Form.Field>
                <Form.Field>
                    <Rating defaultRating={3} maxRating={5} icon="star" />
                </Form.Field>
            </Form.Group>
            <Form.Field>
                <TextArea rows="10" placeholder="Comments..."></TextArea>
            </Form.Field>
            <Button primary>Save Review</Button>
        </Form>
    );
}

export default RatingForm;