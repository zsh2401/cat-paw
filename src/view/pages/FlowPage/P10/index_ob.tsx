import React, { useState, ReactNode } from 'react'
import StdProps from '../../../../common/std-props'
import useTimer from '../../../../common/timer/useTimer'
import { Time } from '../../FragmentPage/Clock';
import * as timer from '../../../../common/timer'
//@ts-ignore
import styles from './index.css'
import { Divider, IconButton, Icon } from 'rsuite';
import PProps from '../PProps';
export interface P10State {
    playing: boolean;
    displayContent: boolean;
    time: Time
}
export default class P10 extends React.Component<PProps, P10State>{
    constructor(props: PProps) {
        super(props);
        this.state = {
            playing: false,
            displayContent: false,
            time: ["", "", "", ""]
        }
    }
    private onBgPlaying() {
        this.setState({
            playing: true
        });
    }
    private onBgPause() {
        this.setState({
            playing: false
        });
    }
    private interval: any;
    private playBg() {
        let topDiv = (document.querySelector("#topDiv") as HTMLDivElement);
        topDiv.classList.add("animated", "fadeOut", "slower");

        let v = (document.getElementById("p10_video") as HTMLVideoElement);
        v.play();

        topDiv.addEventListener("animationend", () => {
            this.setState({
                displayContent: true
            });
            const begin = new Date(2019, 3, 14, 8, 0);
            this.interval = setInterval(() => {
                let span = timer.getSpan(new Date(), begin);
                let tArr = timer.msToTimeArr(span);
                let t = tArr.map((n) => timer.complete2(n));
                this.setState({
                    time: t as Time
                });
            }, 1000);
        })
    }
    componentWillUnmount() {
        if (this.interval) {
            clearInterval(this.interval);
        }
    }

    render() {
        let top: ReactNode;
        if (this.state.displayContent) {
            top = <div className="text-white">
                <div className="h-100 w-100 d-flex flex-column container">
                    <div className="flex-grow-1 d-flex flex-column justify-content-center">
                        <div>
                            <h3 className="font-italic font-weight-bold">
                                <span className="animated fadeIn delay-1s slower">Tick</span>
                                <span className="animated fadeIn delay-2s slower">-Tock</span>

                                <span className="animated fadeIn delay-3s slower"> Tick</span>
                                <span className="animated fadeIn delay-4s slower">-Tock</span>
                            </h3>
                            <br /> 
                            {/* <Divider/> */}
                            <h5 className="animated fadeIn delay-6s slower">从2019年3月14日起</h5>
                            <h3 className="animated fadeIn delay-10s slower">{this.state.time[0]}天{this.state.time[1]}小时{this.state.time[2]}分钟{this.state.time[3]}秒</h3>
                            <h4 className="animated fadeIn delay-8s slower">我们已经相爱</h4>
                            <br />  <br />
                            <h4 className="animated fadeIn delay-13s slower">这一切,还会继续</h4>
                        </div>
                    </div>

                    <div className="flex-grow-0 animated fadeIn delay-13s slower">
                        <p className="font-italic">信じてたよ永遠に この時が続くこと<br/>
                            因此深信着你 祈望此刻永远延续</p>
                            <br/><br/>
                        <IconButton size="lg" onClick={this.props.onRequestNext}
                            className="animated infinite slow bounce d-block mr-auto ml-auto bg-transparent text-white"
                            icon={<Icon icon="angle-double-down" />} circle />
                    </div>
                </div>
            </div>
        } else {
            top = <div id="topDiv" className="w-100 h-100 bg-white d-flex flex-column justify-content-center">
                <h1 onClick={() => this.playBg()} className="text-center" style={{ textDecoration: "underline" }}>Click here</h1>
            </div>
        }
        return <div className={styles.baseContainer}>
            <video id="p10_video" muted loop
                onPlaying={() => this.onBgPlaying()} onPause={() => this.onBgPause()} className={styles.bgVideo} >
                <source src={require("!file-loader!./assets/bg.mp4")}></source>
            </video>

            <div className={styles.top}>
                {top}
            </div>
        </div>
    }
}