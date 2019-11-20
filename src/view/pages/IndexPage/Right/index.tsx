import React from 'react'
//@ts-ignore
import style from './index.css'
import { Divider } from 'rsuite'
export default function () {
    return <div>
        <Divider className="d-block d-sm-none w-100"/>
        <div className={style.card}>
            <h3 style={{ fontWeight: "bold" }}>WHY?</h3>
            <p>还记得吗?我因一些原因想却没能送给你成年礼
            <br />你安慰我说:<i>"你把你送给我了呀"</i>
                <br />那一刻我无比感动和高兴,心里只想:"此生有你,别无他求"
            <br /> <br />
                一段时间过去...我仍想送你一份有具有纪念性的礼物.
            <br />既然善良的猫宝不要钱也不要玩偶,那我就用时间和心血为你做一个应用吧.
            <br />如果一切顺利,你将在2019年11月25日见到这份礼品
            <br />(虽然这一天是花苞的生日,但花苞还是要反向送你一份礼物哦)
        </p>
            <img className={style.iamgift} src={require("../img/iamgift.png")}></img>
            <br /><br />
        </div>
    </div>
}