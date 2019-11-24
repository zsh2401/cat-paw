import React from 'react'
import AppTemplate from '../../components/AppTemplate'
import { Switch, Route, Redirect } from 'react-router'
import OpenSource from './OpenSource'
import Install from './Install'
import NavBar from '../../components/NavBar'
import debugMx from '../../../common/debug-mx'
import { Avatar, Divider } from 'rsuite'
import { Link } from 'react-router-dom'
export default function AboutPage({ match }: any) {
    return <AppTemplate nonavbar container={false} nofooter>
        <NavBar className="sticky-top" />
        <div className="container">
            <Main />
            <Switch>
                <Route exact path={`${match.url}`} render={() => <Redirect to={`${match.url}/opensource`} />}></Route>
                <Route path={`${match.url}/install`} component={Install}></Route>
                <Route path={`${match.url}/opensource`} component={OpenSource}></Route>
            </Switch>
        </div>
    </AppTemplate>
}
function Main({ match }: any) {
    return <div>
        <div className="row" style={{ marginTop: "20px" }}>
            <div className="col-md-4 text-center">
                <img className="d-block mr-auto ml-auto" style={{ maxWidth: "100px" }} src={require("../../../app/icon/icon.png")} />
                <h2 className="font-weight-bolder">Yin's Cat Paw</h2>
                <h4>For Lee Yin</h4>
                <p>编译时间:{debugMx.COMPILED_DATE}</p>
            </div>

            <div className="col-md-8">
                <Divider className="d-block d-md-none" />
                <div className="h-100 d-flex flex-column justify-content-center">
                    <div className="d-flex justify-content-center justify-content-sm-start">
                        <Avatar size="sm" src={require("./img/zsh2401.jpeg")} circle />
                        <div className="d-flex flex-column justify-content-center">由张顺泓制作</div>
                    </div>

                    <div className="d-flex justify-content-center justify-content-sm-start">
                        <Avatar size="sm" src={require("./img/ly.png")} circle />
                        <div className="d-flex flex-column justify-content-center">献给李隐和小海参</div>
                    </div>

                    <br />
                    {/* Yin's Cat Paw是一个典型的基于React + Webpack等技术的web应用,实现了响应式设计和Progressive Web Application技术。<br /> */}
                </div>
            </div>
        </div>

        <div className="d-none d-md-block"> <br /><br /></div>

        <div className="d-flex justify-content-center">
            <Link to={`/about/install`}>安装</Link> <Divider vertical /><Link to={`/about/opensource`}>开放源代码</Link>
        </div>
    </div>
}