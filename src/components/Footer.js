import React from 'react';
import { Button, Icon } from 'semantic-ui-react';

const Footer = () => {
    return (
        <footer>
            <Button color="twitter">
                <Icon name="twitter" /> Twitter
            </Button>
            <Button color="facebook">
                <Icon name="facebook" /> Facebook
            </Button>
        </footer>
    );
}

export default Footer;