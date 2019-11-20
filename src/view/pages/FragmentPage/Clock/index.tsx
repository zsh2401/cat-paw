import React, { useState } from 'react'
import { Divider, Button } from 'rsuite'
import useTicker from '../../../../common/hooks/useTicker'
import { useTimer, useCountdown } from './timer'
//@ts-ignore
import style from './index.css'
import { Link, useHistory } from 'react-router-dom'
export type Time = [string, string, string, string];
const BEGIN = new Date(2019, 3, 14, 20, 0, 0);

export default function Clock() {
    let [loveTime, loveTimeSetter] = useState(["", "", "", ""]);
    let [hCountdown, hCountdownSetter] = useState(["", "", "", ""]);
    let [byTime, byTimeSetter] = useState(["", "", "", ""]);
    let [bzTime, bzTimeSetter] = useState(["", "", "", ""]);

    useTimer(BEGIN, (time: Time) => {
        loveTimeSetter(time);
    });

    useTimer(new Date(2001, 5, 29), (time: Time) => {
        byTimeSetter(time);
    });

    useTimer(new Date(1999, 11, 25), (time: Time) => {
        bzTimeSetter(time);
    });

    useCountdown(new Date(2020, 4, 11), (time) => {
        hCountdownSetter(time)
    });

    const history = useHistory();
    const goBack = () => {
        history.go(-1);
    }
    return <div className={`h-100 ${style.clockbg}`}>
        <div className="container text-white">
            <h1>The Timecounter</h1>
            <p>"Lost time is never found again." – Benjamin Franklin.</p>
            <br /><br />
            <div>
                <h4>我们已经相爱</h4>
                <h2>{loveTime[0]}天{loveTime[1]}时{loveTime[2]}分{loveTime[3]}秒</h2>
                <p>从2019年3月14日20:00起</p>
            </div>
            <Divider />
            <div className="d-flex">
                <div className="flex-grow-1">
                    <p>距离某件重要的事儿,还有</p>
                    <p>2020年4月11日20:00</p>
                </div>
                <div className="flex-grow-0">
                    <h6 style={{ fontWeight: "bold" }}>{hCountdown[0]}天{hCountdown[1]}时{hCountdown[2]}分{hCountdown[3]}秒</h6>
                </div>
            </div>
            <Divider />
            <div className="d-flex">
                <div className="flex-grow-1">
                    <p>李隐已经来到这个世界</p>
                    <p>从2001年5月29日起</p>
                </div>
                <div className="flex-grow-0">
                    <h6 style={{ fontWeight: "bold" }}>{byTime[0]}天{byTime[1]}时{byTime[2]}分{byTime[3]}秒</h6>
                </div>
            </div>
            <Divider />
            <div className="d-flex">
                <div className="flex-grow-1">
                    <p>张已经来到这个世界</p>
                    <p>从1999年11月25日起</p>
                </div>
                <div className="flex-grow-0">
                    <h6 style={{ fontWeight: "bold" }}>{bzTime[0]}天{bzTime[1]}时{bzTime[2]}分{bzTime[3]}秒</h6>
                </div>
            </div>
            <Divider />
            <p className="text-center">可,青涩约定中的那一天,还有多久呢?...<br /><br />
                <Button color="blue" onClick={goBack} appearance="ghost"><h5>返回主页</h5></Button>
            </p>
        </div>
    </div>
}