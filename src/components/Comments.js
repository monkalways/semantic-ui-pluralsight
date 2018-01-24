import React from 'react';

import { Comment, Rating } from 'semantic-ui-react';

const Comments = () => {
    return (
        <Comment.Group>
            <Comment>
                <Comment.Content>
                    <Comment.Author>
                        Dan Green
                        <Comment.Metadata as="span">
                            <Rating defaultRating={5} maxRating={5} icon="star" disabled />
                        </Comment.Metadata>
                    </Comment.Author>
                    <Comment.Text>
                        My family loves this. It"s all the kids talk about once the weather starts turning warm.
                    </Comment.Text>
                    <Comment.Actions>
                      <a>Reply</a>
                    </Comment.Actions>
                </Comment.Content>
            </Comment>
            <Comment>
                <Comment.Content>
                    <Comment.Author>
                        Janice Bosely
                        <Comment.Metadata as="span">
                            <Rating defaultRating={5} maxRating={5} icon="star" disabled />
                        </Comment.Metadata>
                    </Comment.Author>
                    <Comment.Text>
                        My grandkids love this!
                    </Comment.Text>
                    <Comment.Actions>
                      <a>Reply</a>
                    </Comment.Actions>
                </Comment.Content>
            </Comment>
            <Comment>
                <Comment.Content>
                    <Comment.Author>
                        Julie Gordon
                        <Comment.Metadata as="span">
                            <Rating defaultRating={3.5} maxRating={5} icon="star" disabled />
                        </Comment.Metadata>
                    </Comment.Author>
                    <Comment.Text>
                        It"s usually a good time. Overall, I can"t complain. I"m disappointed that last year they decided
                        to cancel the end-of-the-carnival fireworks. That was the best part! But we"ll be back this year.
                    </Comment.Text>
                    <Comment.Actions>
                      <a>Reply</a>
                    </Comment.Actions>
                </Comment.Content>
            </Comment>
            <Comment>
                <Comment.Content>
                    <Comment.Author>
                        Casey Smith
                        <Comment.Metadata as="span">
                            <Rating defaultRating={3} maxRating={5} icon="star" disabled />
                        </Comment.Metadata>
                    </Comment.Author>
                    <Comment.Text>
                        Bring back the twister!!!
                    </Comment.Text>
                    <Comment.Actions>
                      <a>Reply</a>
                    </Comment.Actions>
                </Comment.Content>
            </Comment>
        </Comment.Group>
    );
}

export default Comments;