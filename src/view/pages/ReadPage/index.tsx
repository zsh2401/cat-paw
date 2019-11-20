import React from 'react'
import { Template } from '../../components'
import { Switch, Route } from 'react-router'
import Promises from './Promises'
import Letters from './Letters'
export default function ReadPage({ match }: any) {
    return <Switch>
        <Route path={`${match.url}/loveletters`} component={Letters} />
        <Route path={`${match.url}/promises`} component={Promises} />
    </Switch>
}