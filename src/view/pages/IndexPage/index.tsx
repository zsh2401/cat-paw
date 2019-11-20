import * as React from 'react';
//@ts-ignore
import style from './index.css'
import Left from './Left';
import Right from './Right';
import NavBar from './NavBar';
import debugMx from '../../../common/debug-mx';
import { Button, Divider } from 'rsuite';
import { Link } from 'react-router-dom';
export default function IndexPage() {
  return <div className="w-100 h-100 d-flex flex-column">
    <div className="flex-grow-1">
      <div className={`$jumbotron jumbotron-fluid  ${style.head}`}>
        <NavBar />
        <div className={`${style.padder} container`}>
          <h1 className={`d-none d-sm-block ${style.title}`}>Lee Yin's Cat Paw</h1>
          <div className={`d-sm-none ${style.title}`}>
            <h3>Lee Yin's</h3>
            <h1>Cat Paw</h1>
          </div>

          <h4 className={style.subtitle}>A small gift for you,Lee Yin.</h4>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <Left />
          </div>
          <div className="col-md-6">
            <Right />
          </div>
        </div>
      </div>
    </div>
    <div className="flex-grow-0">
      <div className="d-flex justify-content-center" style={{ marginTop: "10px" }}>
        <Link to="/about/pwa">安装到桌面</Link><Divider vertical />
        <Link to="/about/opensource">开放源代码</Link><Divider vertical />
        <Link to="/about/about">关于</Link><Divider vertical />
        <a href="https://zsh2401.top" target="_blank">滑滑的博客</a>
      </div>
      <p className="text-center">
        Copyright © 2017 - {new Date().getFullYear()} {debugMx.AUTHOR},All Rights Reserved
        <br />Love Yin For Good
        </p>
    </div>
  </div>
}