import React, { useState, CSSProperties } from 'react'
import { Divider } from 'rsuite'
import { useTimer, useCountdown } from '../../../../common/timer'
import { useHistory } from 'react-router-dom'
import NavBar from '../../../components/NavBar'
//@ts-ignore
import bgImg from '!url-loader?limit=10000000!image-webpack-loader!./wallhaven-vmpljm.jpg'
export type Time = [string, string, string, string];
const BEGIN = new Date(2019, 3, 14, 20, 0, 0);

const ClockBgStyle: CSSProperties = {
    backgroundSize: "cover",
    backgroundImage: `url(${bgImg})`,
    minHeight: "100%"
}
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

    let wrapperEle: HTMLDivElement;
    const history = useHistory();
    // const goBack = () => {
    //     wrapperEle.classList.remove("zoomIn");
    //     wrapperEle.classList.add("zoomOut");
    //     setTimeout(() => {
    //         history.go(-1);
    //     }, 1000);
    // }
    return <div ref={ele => wrapperEle = ele as HTMLDivElement} style={ClockBgStyle} className={`animated zoomIn`}>

        <div className="min-h-100 text-white d-flex flex-column">
            <NavBar className="flex-grow-0 bg-transparent navbar-dark" noIcon />


            <div className="flex-grow-1 container d-flex flex-column justify-content-center">
                <h1 className="d-none d-sm-block" style={{ textDecoration: "underline" }}>The Timecounter</h1>
                <div className="d-block d-sm-none">
                    <h1>The</h1>
                    <h1>Timecounter</h1>
                </div>
                <br /><br />
                <div>
                    <h4>我们已经相爱</h4>
                    <h3>{loveTime[0]}天{loveTime[1]}时{loveTime[2]}分{loveTime[3]}秒</h3>
                    <p>从2019年3月14日20:00起</p>
                </div>
                <Divider />
                <div className="d-flex">
                    <div className="flex-grow-1">
                        <p>距离某件重要的事儿,还有</p>
                        <p>2020年4月11日20:00</p>
                    </div>
                    <div className="flex-grow-0">
                        <h6 className="d-none d-sm-block font-weight-bold">{hCountdown[0]}天{hCountdown[1]}时{hCountdown[2]}分{hCountdown[3]}秒</h6>
                        <p className="d-block d-none-sm" style={{ fontWeight: "bold" }}>{hCountdown[0]}天{hCountdown[1]}时{hCountdown[2]}分{hCountdown[3]}秒</p>
                    </div>
                </div>
                <Divider />
                <div className="d-flex">
                    <div className="flex-grow-1">
                        <p>李隐已经来到这个世界</p>
                        <p>从2001年5月29日起</p>
                    </div>
                    <div className="flex-grow-0">
                        <h6 className="d-none d-sm-block font-weight-bold">{byTime[0]}天{byTime[1]}时{byTime[2]}分{byTime[3]}秒</h6>
                        <p className="d-block d-none-sm" style={{ fontWeight: "bold" }}>{byTime[0]}天{byTime[1]}时{byTime[2]}分{byTime[3]}秒</p>
                    </div>
                </div>
                <Divider />
                <div className="d-flex">
                    <div className="flex-grow-1">
                        <p>张已经来到这个世界</p>
                        <p>从1999年11月25日起</p>
                    </div>
                    <div className="flex-grow-0">
                        <h6 className="d-none d-sm-block font-weight-bold">{bzTime[0]}天{bzTime[1]}时{bzTime[2]}分{bzTime[3]}秒</h6>
                        <p className="d-block d-none-sm" style={{ fontWeight: "bold" }}>{bzTime[0]}天{bzTime[1]}时{bzTime[2]}分{bzTime[3]}秒</p>
                    </div>
                </div>
                <Divider />
                <p className="text-center">青涩约定中的那一天,还有多久?...</p><br />
            </div>

        </div>
    </div>
}