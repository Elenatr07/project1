import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from './components/Layout/Layout.jsx';
import Menu from './containers/Menu/Menu'

export default class Router extends Component {
    render() {
        return (
            <Switch>
                <Route exact={true} path='/' component={Layout} />
                <Route exact path='/chat/:chatId/' render={obj => <Menu chatId={Number(obj.match.params.chatId)} />} />
            </Switch>
        )
    }
}