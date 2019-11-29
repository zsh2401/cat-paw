import React from 'react'
import { Divider, Panel, PanelGroup } from 'rsuite'
export default function InstallPWA() {
    return <div>
        <br/>
        <p className="font-italic text-sm-center"> YCP实现了Progressive Web Application技术,你可以将其安装到本地,并在今后离线使用,就像一个原生应用那样。</p>
        <br/>
        <PanelGroup accordion defaultActiveKey={1} bordered>
            <Panel header={<b>Chrome</b>} eventKey={1}>
                当你通过PC端Chrome最新版访问本站点时,在地址栏右侧会出现+号按钮,点击即可安装到桌面
            </Panel>

            <Panel header={<b>iOS</b>} eventKey={2}>
                通过Safari浏览器访问本站点,点击底部分享按钮->添加到桌面即可完成PWA安装。
            </Panel>

            <Panel header={<b>Android Chrome</b>} eventKey={3}>
                通过Android Chrome浏览器访问本站点,点击右上角菜单->添加到桌面
            </Panel>
        </PanelGroup>
    </div>
}