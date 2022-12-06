import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import { List, ListItem } from '@material-ui/core';
import { Link } from 'react-router-dom';
import SendRounded from '@material-ui/icons/SendRounded';


export default class ChatList extends Component {
    render() {
        return (
            <div>
                <List>
                    <Link to='/chat/1/'>
                        <ListItem
                            button={true}
                        >Chat One <SendRounded /></ListItem>
                    </Link>

                    <Link to='/chat/2/'>
                        <ListItem
                            button={true}
                        >Chat Two <SendRounded /></ListItem>
                    </Link>
                </List>
                <Button variant="contained" color="primary">New chat</Button>
            </div>

        )
    }
}