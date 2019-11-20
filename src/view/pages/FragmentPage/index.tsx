import React from 'react'
import { Template } from '../../components'
import { Switch, Route } from 'react-router'
import Clock from './Clock'
import Links from './Links'
export default function FragmentPage({match}:any){
    return <Template>
        <Switch>
            <Route exact path={`${match.url}/loveclock`} component={Clock}></Route>
            <Route exact path={`${match.url}/links`} component={Links}></Route>
        </Switch>
    </Template>
}
function Main(){
    return <div>F-Main</div>
}