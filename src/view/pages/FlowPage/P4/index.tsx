import React from 'react'
import StdProps from '../../../../common/std-props'
import { IconButton, Icon, Divider } from 'rsuite'
import PProps from '../PProps'
//@ts-ignore
import Blur from 'react-blur'
//@ts-ignore
import style from './index.css'
export default function (props: PProps) {
    return <div {...props}>
        <div className={`${style.bg} h-100 w-100 d-flex flex-column`}>

            <div className="flex-grow-1 d-flex flex-column justify-content-center text-center text-white">
                <div className="container">
                    <h2 className="animated delay-1s slower fadeInLeft">回忆不断浮现</h2>
                    <Divider className="animated delay-3s fadeIn"><h4>过去只是未来的羁绊</h4></Divider>
                    <h6 className="animated delay-4s fadeIn">我希望</h6>
                    <h5 className="animated delay-5s fadeIn">希望</h5>
                    <h4 className="animated delay-6s fadeIn">希望</h4>
                    <h3 className="animated delay-7s fadeIn">希望</h3>
                    <h2 className="animated delay-8s fadeIn">希望</h2>
                    <div className="animated fadeIn delay-9s" style={{ marginTop: "40px" }}>
                        <IconButton onClick={props.onRequestNext} className="animated infinite slow bounce d-block mr-auto ml-auto"
                            icon={<Icon icon="arrow-down2" />} circle />
                        <br /><br />
                    </div>
                </div>
            </div>


            <div className="flex-grow-0 animated fadeIn delay-10s text-white text-center container">
                <Divider>lrc</Divider>
                <p className="font-italic">
                    I wish that I could turn back time<br />
                    cos now the guilt is all mine
                        </p>
                <br /><br />
            </div>
        </div>
    </div>
}