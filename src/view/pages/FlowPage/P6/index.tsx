import React from 'react'
import StdProps from '../../../../common/std-props'
import PProps from '../PProps'
import { IconButton, Icon, Divider } from 'rsuite'
//@ts-ignore
import styles from './index.css'

export default function (props: PProps) {
    return <div {...props}>
        <div className={`${styles.bg} h-100 w-100 d-flex flex-column`}>
            <div className="flex-grow-1">
                <br />
                <div className="container text-center">
                    <h5 className="animated rotateInUpLeft delay-1s slow">我幼稚吗?</h5>
                    <h3 className="animated rotateInUpRight delay-3s slow">你总是说我幼稚...</h3>
                    <br />
                    <p className="animated fadeIn delay-5s slow">为了我们的未来,我做了很多理性分析与思考</p>
                    <p className="animated fadeIn delay-7s slow">我的结论是</p>
                    <h4 className="animated fadeIn delay-9s slow">我们的爱是具有可见与可行性的</h4>
                    <br />
                    <h1 className="animated fadeIn delay-10s slow">It's possible!</h1>
                    <br />
                    <div className="animated fadeIn delay-10s slow">
                        <Divider>lrc</Divider>
                        <p className="font-italic">And in your dreams you’ll see me falling, falling</p>
                        <Divider>lrc II</Divider>
                        <p className="font-italic">
                            不经历风雨 怎能有传奇,我会在这里等着你<br />
                            我就要和你在一起</p>
                    </div>
                </div>
            </div>

            <div className="flex-grow-0 animated fadeIn delay-10s">
                <IconButton onClick={props.onRequestNext} className="animated infinite slow bounce d-block mr-auto ml-auto"
                    icon={<Icon icon="arrow-down2" />} circle />
                <br />
            </div>
        </div>
    </div>
}