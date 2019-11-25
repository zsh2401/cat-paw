import React from 'react'
import { Switch, Route } from 'react-router'
import AppTemplate from '../../components/AppTemplate'
import NavBar from '../../components/NavBar'
import { LodableComponent } from '../../components'
import Letters from './Letters'
import Tea from './Tea'
import useBackToTop from '../../../common/hooks/useBackToTop'
export default function ReadPage({ match }: any) {
    useBackToTop();
    return <AppTemplate container={false} nonavbar>
        <NavBar className="sticky-top"></NavBar>
        <Switch>
            <Route path={`${match.url}/loveletters`} component={GLetters} />
            <Route path={`${match.url}/tea`} component={GTea} />
        </Switch>
    </AppTemplate>
}
function GLetters(){
    // return <LodableComponent loader={()=>import(/*webpackChunkName:"letters" */ "./Letters")}/>
    return <Letters/>;
}
function GTea(){
    // return <LodableComponent loader={()=>import(/*webpackChunkName:"tea" */"./Tea")}/>
    return <Tea/>;
}