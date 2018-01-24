import React from 'react';

import { Button, Divider, Header, Icon, Image, Segment } from 'semantic-ui-react';

import Comments from './Comments';
import RatingForm from './RatingForm';

const HomePage = () => {
    return (
       <div>
            <h1>All City Carnival <span>(4.5/5)</span></h1>
            <Image 
                src="./images/fair.jpg"
                size="medium"
                circular
                verticalAlign="middle"
                floated="left"
            />
            <span>
                <h2>Description:</h2>
                <p>The All City Carnival is held every year to kick off the summer. It"s our chance to gather folks from all across town to celebrate
                    the beginning of summer. This four night extravaganza features shows from local bands, local food vendors and all the rides you can handle.
                    The midway games are always a favorite for young and old alike. Come celebrate with your neighbors and see if you can"t walk home 
                    with a giant stuffed teddy bear!</p>
            </span>
            <Segment clearing basic>
                <Button.Group>
                    <Button color="facebook">
                        <Icon name="facebook" /> Facebook
                    </Button>
                    <Button.Or />
                    <Button color="twitter">
                        <Icon name="twitter" /> Twitter
                    </Button>
                    <Button.Or />
                    <Button color="google plus">
                        <Icon name="google plus" /> Google Plus
                    </Button>
                </Button.Group>
            </Segment>
            <RatingForm />
            <Divider horizontal>
                <Header>
                    <Icon name="star"/>
                    Ratings
                </Header>
            </Divider>
            <Comments />
       </div> 
    );
}

export default HomePage;