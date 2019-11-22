import React from 'react'
import StdProps from '../../../../common/std-props'
import HWCenter from '../../../components/HWCenter'
import { Divider, IconButton, Icon } from 'rsuite'
export default function (props: StdProps) {
    return <div {...props}>
        <div className="w-100 h-100 d-flex flex-column">
            <div className="d-flex flex-grow-1 flex-column justify-content-center">
                <div className="container text-center">
                    <h3 className="animated fadeIn delay-1s slower">是不是觉得,我又要说一堆废话?</h3>
                    <Divider className="animated fadeIn delay-3s font-italic">"我都背下来了"</Divider>
                    <div className="animated fadeIn delay-6s">
                        "我会陪着你"<br/>
                        "抱抱你抱抱你"<br/>
                        "LYFG"<br/>
                        "没事哒"<br/>
                    </div>
                    <br />
                    <p className="animated fadeIn delay-8s">确实,我不知道如何更好地去表达自己..</p>
                </div>
            </div>

            <div className="flex-grow-0 animated fadeIn delay-10s">
                <IconButton className="animated infinite slow bounce d-block mr-auto ml-auto"
                    icon={<Icon icon="arrow-down2" />} circle />
                <br /><br />
            </div>
        </div>
    </div>
}