import React from 'react'
import { Template } from '../../components'
import { Switch, Route } from 'react-router'
import Promises from './Promises'
import Letters from './Letters'
export default function ReadPage({match}:any){
    console.log(match);
    return <Template>
        <h1>Read...</h1>
        <Switch>
            <Route exact path={`${match.url}/`} component={Main}/>
            <Route path={`${match.url}/loveletters`} component={Letters}/>
            <Route path={`${match.url}/promises`} component={Promises}/>
        </Switch>
    </Template>
}
function Main(){
    return <div>Main</div>
}