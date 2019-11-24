import React from 'react'
import BCard from './BCard'
import { Divider } from 'rsuite'
export default function () {
    return <div>
        <Divider>去哪咧?</Divider>
        <div className="row">
            <BCard to="/flow" name="-Flow-" description="我的心流...你是否感知到?" />
            <BCard to="/read/tea" name="茶" description="随便说点啥" />
            <BCard to="/fragment/loveclock" name="TimeCounter!" description={"\"时间是表征物质运动的最基本物理量,是人类文明发展中的一个重要组成部分\""} />
            <BCard to="/read/loveletters" name="嘿嘿,情书" description={"虽然我语文不好!但我就是要写!不服咬我!"} />
        </div>
        <Divider>Anywhere but here</Divider>
        <div className="row">
            <BCard external to="http://dream.zsh2401.top:1937" name="树屋" description={"Hey!我们的树屋已经长蜘蛛网了!回去康康吧~"} />
            <BCard external to="https://zsh2401.top" name="滑滑的博客" description={"\"山不在高，有仙则名。水不在深，有龙则灵。斯是陋室，惟吾德馨。\""} />
        </div>
    </div>
}