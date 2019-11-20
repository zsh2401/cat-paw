import React from 'react'
import { Link } from 'react-router-dom'
export default function NavBar() {
    return <nav className="navbar navbar-expand-sm bg-light navbar-light sticky-top">
        <div className="container">
            <Link className="navbar-brand" to="/">
                <img style={{height:"30px"}} className="img-fluid" src={require("../../../app/icon/icon.png")}></img>
            </Link>
            <Link className="navbar-brand" to="/">Yin's Cat Paw</Link>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
                <ul className="navbar-nav" >
                    <li className="nav-item">
                        <Link className="nav-link" to="/flow">Flow</Link>
                    </li>


                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                            更多
                    </a>
                        <div className="dropdown-menu">
                            <Link className="dropdown-item" to="/fragment/loveclock">The Clock</Link>
                            <Link className="dropdown-item" to="/read/promises">承诺列表</Link>
                            <Link className="dropdown-item" to="/fragment/links">万箭穿心</Link>
                            <Link className="dropdown-item" to="/read/loveletters">情书</Link>
                        </div>
                    </li>

                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                            关于
                    </a>
                        <div className="dropdown-menu">
                            <Link className="dropdown-item" to="/about">关于</Link>
                            <Link className="dropdown-item" to="/about/opensource">开源</Link>
                            <Link className="dropdown-item" to="/about/pwa">添加为PWA</Link>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
}