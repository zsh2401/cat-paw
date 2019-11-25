import * as React from 'react';
//@ts-ignore
import style from './index.css'
import Left from './Left';
import Right from './Right';
import AppTemplate from '../../components/AppTemplate';
import NavBar from '../../components/NavBar';
import { ValineComment } from '../../components';
import { Divider } from 'rsuite';
import useBackToTop from '../../../common/hooks/useBackToTop';
export default function IndexPage() {
  useBackToTop();
  return <AppTemplate nonavbar container={false}>

    <div className={`${style.head}`} >

      {/* <NavBar noIcon className="flex-grow-0 bg-transparent navbar-dark position-sticky" /> */}

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

      {/* <p className="text-center"></p> */}
      <Divider>畅所 · 欲言</Divider>
      <ValineComment path="/"/>
    </div>
  </AppTemplate>
}