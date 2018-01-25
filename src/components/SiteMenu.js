import React from 'react';
import { Icon, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class SiteMenu extends React.Component {
    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => this.setState( () => ({ activeItem: name }) );

    render() {
        const { activeItem } = this.state; 
        return (
            <Menu color="grey" inverted fixed="top">
                <Menu.Item name="home" to="/" as={Link} active={activeItem === 'home'} onClick={this.handleItemClick} />
                <Menu.Item name="events" to="events" as={Link} active={activeItem === 'events'}  onClick={this.handleItemClick} />
                <Menu.Item name="user-settings" to="user-settings" as={Link} active={activeItem === 'user-settings'}  onClick={this.handleItemClick} />
                <Menu.Item name="logout" />
                
                <Menu.Item position="right">
                    <Icon name="calendar" />
                    Add Event
                </Menu.Item>
            </Menu>
        );
    }
}

export default SiteMenu;