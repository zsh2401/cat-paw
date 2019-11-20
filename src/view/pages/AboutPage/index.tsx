import React from 'react'
import { Template } from '../../components'
import { Switch, Route } from 'react-router'
import OpenSource from './OpenSource'
import InstallPWA from './InstallPWA'
export default function AboutPage({match}:any){
    return <Template>
        <Switch>
            <Route exact path={`${match.url}/`} component={Main}></Route>
            <Route exact path={`${match.url}/pwa`} component={InstallPWA}></Route>
            <Route exact path={`${match.url}/opensource`} component={OpenSource}></Route>
        </Switch>
    </Template>
}
function Main(){
    return <div>Main</div>
}