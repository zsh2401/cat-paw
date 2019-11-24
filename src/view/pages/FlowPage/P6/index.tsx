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
                    <h5 className="animated fadeInUp delay-1s slow">我幼稚吗?</h5>
                    <h3 className="animated fadeInUp delay-3s slow">你总是说我幼稚...</h3>
                    <br />
                    <p className="animated fadeIn delay-5s slow">其实,为了我们的未来<br/>
                    我做了很多理性分析与思考</p>
                    <p className="animated fadeIn delay-7s slow">我的结论是</p>
                    <h4 className="animated fadeIn delay-9s slow">我们的爱是具有可见与可行性的</h4>
                    <br />
                    <h1 className="animated fadeIn delay-10s slow">
                        <span className="animated fadeIn delay-10s slow">I</span>
                        <span className="animated fadeIn delay-11s slow">t</span>
                        <span className="animated fadeIn delay-13s slow">'</span>
                        <span className="animated fadeIn delay-11s slow">s</span>
                        <span> </span>
                        <span className="animated fadeIn delay-12s slow">p</span>
                        <span className="animated fadeIn delay-14s slow">o</span>
                        <span className="animated fadeIn delay-13s slow">s</span>
                        <span className="animated fadeIn delay-12s slow">s</span>
                        <span className="animated fadeIn delay-11s slow">s</span>
                        <span className="animated fadeIn delay-11s slow">i</span>
                        <span className="animated fadeIn delay-13s slow">b</span>
                        <span className="animated fadeIn delay-12s slow">l</span>
                        <span className="animated fadeIn delay-14s slow">e</span>
                        <span className="animated fadeIn delay-10s slow">!</span>
                    </h1>
                    <div className="animated fadeIn delay-17s slow">
                        <Divider>lrc</Divider>
                        <p className="font-italic">And in your dreams you’ll see me falling, falling</p>
                        <p className="font-italic">
                            不经历风雨 怎能有传奇,我会在这里等着你<br />
                            我就要和你在一起</p>
                    </div>
                </div>
            </div>

            <div className="flex-grow-0 animated fadeIn delay-18s">
                <IconButton onClick={props.onRequestNext} className="animated infinite slow bounce d-block mr-auto ml-auto"
                    icon={<Icon icon="arrow-down2" />} circle />
                <br />
            </div>
        </div>
    </div>
}