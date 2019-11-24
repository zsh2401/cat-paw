import * as React from 'react';
//@ts-ignore
import style from './index.css'
import Left from './Left';
import Right from './Right';
import NavBar from './NavBar';
import debugMx from '../../../common/debug-mx';
import { Button, Divider } from 'rsuite';
import { Link } from 'react-router-dom';
import AppTemplate from '../../components/AppTemplate';
export default function IndexPage() {
  return <AppTemplate nonavbar container={false}>

    <div className={`${style.head}`}>
      
      <div className={`${style.nWrapper}`}>
        <NavBar />
      </div>

      <div className={`${style.titleWrapper} container`}>
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
  </AppTemplate>
}