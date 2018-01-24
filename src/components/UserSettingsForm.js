import React, { Component } from 'react';
import { Button, Dropdown, Form } from 'semantic-ui-react';

const options = [
    {
        key: 'al',
        value: 'Alabama',
        text: 'Alabama'
    },
    {
        key: 'ak',
        value: 'Alaska',
        text: 'Alaska'
    }
]


class UserSettingsForm extends Component {
    state = {  }
    render() {
        return (
            <Form>
                <Form.Group widths={2}>
                    <Form.Input label="First Name" placeholder="First Name" />
                    <Form.Input label="Last Name" placeholder="Last Name" />
                </Form.Group>
                <Form.Group widths={2}>
                    <Form.Input label="City" placeholder="City" />
                    <Form.Dropdown label="State" placeholder="Select State" defaultValue="" selection options={options} />
                </Form.Group>
                <Button type='submit' primary>Submit</Button>
            </Form>
        );
    }
}

export default UserSettingsForm;

