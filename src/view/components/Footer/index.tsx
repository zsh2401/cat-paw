import React from 'react'
import { Link } from 'react-router-dom';
import { Divider } from 'rsuite';
import debugMx from '../../../common/debug-mx';
import StdProps from '../../../common/std-props';
export default function Footer(props: StdProps) {
    return <footer {...props}>
        <br/>  <br/>
        <p className="text-center font-italic">Love Yin For Good</p>
        <div className="d-flex justify-content-center" style={{ marginTop: "10px" }}>
            <Link to="/about/install">安装</Link><Divider vertical />
            <Link to="/about/opensource">开放源代码</Link><Divider vertical />
            <Link to="/about/">关于</Link><Divider vertical />
            <a href="https://zsh2401.top" target="_blank">滑滑的博客</a>
        </div>
        <p className="text-center">Copyright © 2017 - {new Date().getFullYear()} {debugMx.AUTHOR},All Rights Reserved</p>
        <br/>  <br/>  <br/>
    </footer>
}