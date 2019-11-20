import React from 'react';
import historyManager from '../common/history-manager';
import { Router, Route, Switch } from 'react-router';
import { IndexPage, NotFoundPage } from '../view/pages';

export default function AppRouter() {
    return <Router history={historyManager.get()}>
        <Switch>
            <Route exact path="/" component={IndexPage}></Route>
            <Route path="*" component={NotFoundPage}></Route>
        </Switch>
    </Router>
}