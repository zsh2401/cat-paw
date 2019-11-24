import React from 'react'
import {  LodableComponent } from '../../components'
import { Switch, Route } from 'react-router'
import Clock from './Clock'
export default function FragmentPage({match}:any){
    return<Switch>
            <Route exact path={`${match.url}/loveclock`} component={GClock}></Route>
        </Switch>
}
// function GClock(){
//     return <LodableComponent loader={()=>import(/*webpackChunkName:"clock" */"./Clock")}/>
// }
function GClock(){
    return <Clock/>
}