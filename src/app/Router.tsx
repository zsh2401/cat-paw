import React from 'react';
import historyManager from '../common/history-manager';
import { Router, Route, Switch } from 'react-router';
import { IndexPage, NotFoundPage } from '../view/pages';
import AboutPage from '../view/pages/AboutPage';
import FragmentPage from '../view/pages/FragmentPage';
import ReadPage from '../view/pages/ReadPage';
import FlowPage from '../view/pages/FlowPage';

export default function AppRouter() {
    return <Router history={historyManager.get()}>
        <Switch>
            <Route exact path="/" component={IndexPage}></Route>
            <Route path="/about" component={AboutPage}></Route>
            <Route path="/flow" component={FlowPage}></Route>
            <Route path="/fragment" component={FragmentPage}></Route>
            <Route path="/read" component={ReadPage}></Route>
            <Route path="*" component={NotFoundPage}></Route>
        </Switch>
    </Router>
}