import React from 'react'
//@ts-ignore
import style from './index.css'
import { Divider, IconButton, Icon } from 'rsuite'
import PProps from '../PProps'
export default function (props: PProps) {
    return <div {...props}>
        <div className={`${style.color}`}>
            <div className={`${style.bg} w-100 h-100 d-flex flex-column`}>
                <div className="d-flex flex-grow-1 flex-column justify-content-center">
                    <div className="container text-center">
                        <h4 className="animated fadeIn delay-1s slower">是不是觉得,我又要说一堆废话?</h4>
                        <Divider className="animated fadeIn delay-3s font-italic">"我都背下来了"</Divider>
                        <div className="animated fadeIn delay-6s">
                            "我会陪着你"<br />
                            "抱抱你抱抱你"<br />
                            "LYFG"<br />
                            "没事哒"<br />
                        </div>
                        <br />
                        <h5 className="animated fadeIn delay-8s">确实,我不知道如何更好地去表达自己..</h5>
                        <br /><br />
                        <p className="animated fadeIn delay-10s font-italic">
                            I know, I know I've let you down,<br />
                            I've been a fool to myself.
                    </p>
                    </div>
                </div>

                <div className="flex-grow-0 animated fadeIn delay-10s">
                    <IconButton onClick={props.onRequestNext} className="animated infinite slow bounce d-block mr-auto ml-auto"
                        icon={<Icon icon="arrow-down2" />} circle />
                    <br /><br />
                </div>
            </div>
        </div>
    </div>
}