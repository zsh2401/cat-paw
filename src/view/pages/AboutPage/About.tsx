import React from 'react'
import AppTemplate from '../../components/AppTemplate'
import { Switch, Route, Redirect } from 'react-router'
import OpenSource from './OpenSource'
import Install from './Install'
import NavBar from '../../components/NavBar'
import debugMx from '../../../common/debug-mx'
import { Avatar, Divider } from 'rsuite'
import { Link } from 'react-router-dom'
import useBackToTop from '../../../common/hooks/useBackToTop'
export default function AboutPage() {
    useBackToTop();
    return <AppTemplate nonavbar container={false}>
        <NavBar className="sticky-top" />
        <div className="min-h-100 container d-flex flex-column justify-content-center">
            <div className="row">
                <div className="col-md-6">
                    <Main />
                </div>
                <div className="col-md-6">
                    <br />
                    <div className="d-flex justify-content-center">
                        <Link to={`/about/install`}>安装</Link> <Divider vertical /><Link to={`/about/opensource`}>开放源代码</Link>
                    </div>
                    <Switch>
                        <Route exact path={`/about`} render={() => <Redirect to={`/about/opensource`} />}></Route>
                        <Route path={`/about/install`} component={Install}></Route>
                        <Route path={`/about/opensource`} component={OpenSource}></Route>
                    </Switch>
                </div>
            </div>
        </div>
    </AppTemplate>
}
function Main() {
    return <div className="text-center">


        <img className="d-block mr-auto ml-auto" style={{ maxWidth: "100px" }} src={require("../../../app/icon/icon.png")} />
        <h2 className="font-weight-bolder">Yin's Cat Paw</h2>
        <h4>For Lee Yin</h4>
        <p>编译时间:{debugMx.COMPILED_DATE}</p>
        <br /><br />
        <div className="d-flex justify-content-center">
            <Avatar size="sm" src={require("./img/zsh2401.jpeg")} circle />
            <div className="d-flex flex-column justify-content-center">由张顺泓制作</div>
        </div>

        <div className="d-flex justify-content-center">
            <Avatar size="sm" src={require("./img/ly.png")} circle />
            <div className="d-flex flex-column justify-content-center">献给李隐和小海参</div>
        </div>
    </div>
}