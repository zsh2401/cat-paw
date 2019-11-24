import React from 'react'
import { Switch, Route } from 'react-router'
import Tea from './Tea'
import Letters from './Letters'
export default function ReadPage({ match }: any) {
    return <Switch>
        <Route path={`${match.url}/loveletters`} component={Letters} />
        <Route path={`${match.url}/tea`} component={Tea} />
    </Switch>
}