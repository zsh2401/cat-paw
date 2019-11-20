import React from 'react'
import { Link } from 'react-router-dom';
import { Divider } from 'rsuite';
import debugMx from '../../../common/debug-mx';
export default function Footer() {
    return <footer>
        <div className="d-flex justify-content-center" style={{ marginTop: "10px" }}>
            <Link to="/about/pwa">安装到桌面</Link><Divider vertical />
            <Link to="/about/opensource">开放源代码</Link><Divider vertical />
            <Link to="/about/about">关于</Link><Divider vertical />
            <a href="https://zsh2401.top" target="_blank">滑滑的博客</a>
        </div>
        <p className="text-center">
            Copyright © 2017 - {new Date().getFullYear()} {debugMx.AUTHOR},All Rights Reserved
        <br />Love Yin For Good</p>
    </footer>
}