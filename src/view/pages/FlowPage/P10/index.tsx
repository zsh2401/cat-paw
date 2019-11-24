import React, { useState } from 'react'
import PProps from '../PProps'
import { useTimer } from '../../../../common/timer';
import { IconButton, Icon } from 'rsuite';
//@ts-ignore
import styles from './index.css'
const BEGIN = new Date(2019, 3, 14, 8, 0);
export default function P10(props: PProps) {
    let [time, setTime] = useState(["", "", "", ""]);
    useTimer(BEGIN, (newTime) => {
        setTime(newTime);
    });
    return <div {...props}>
        <div className={`h-100 w-100 ${styles.picBg}`}>
            <div className={`h-100 w-100 d-flex flex-column container`}>

                <div className="flex-grow-1 d-flex flex-column justify-content-center container bg-transparent text-md-center">
                    <div>
                        <h5 className="font-italic font-weight-bold">
                            <span className="animated fadeIn delay-1s slower">Tick</span>
                            <span className="animated fadeIn delay-2s slower">-Tock</span>

                            <span className="animated fadeIn delay-3s slower"> Tick</span>
                            <span className="animated fadeIn delay-4s slower">-Tock</span>
                        </h5>
                        <br />

                        <p className="animated fadeIn delay-6s slower">从2019年3月14日起</p>
                        <h3 className="animated fadeIn delay-10s slower">{time[0]}天{time[1]}小时{time[2]}分钟{time[3]}秒</h3>
                        <p className="animated fadeIn delay-8s slower">我们已经相爱</p>
                        <br />  <br />
                        <h5 className="animated fadeIn delay-13s slower">这一切<span className="animated fadeIn delay-14s slower">,还会继续</span></h5>
                        <br />
                        <div className="flex-grow-0 animated fadeIn delay-16s slower">
                            <IconButton size="lg" onClick={props.onRequestNext}
                                className="animated infinite slow bounce d-block mr-auto ml-auto bg-transparent text-white"
                                icon={<Icon icon="angle-double-down" />} circle />
                        </div>
                    </div>
                </div>

                <div className="flex-grow-0 animated fadeIn delay-16s slower container">
                    <p className="font-italic">信じてたよ永遠に この時が続くこと<br />
                        因此深信着你 祈望此刻永远延续</p>
                    <p>爱是唯一可以穿越时间与空间的事物。</p>
                    <br />

                </div>

            </div>
        </div>

    </div>
}