import React from 'react'
import StdProps from '../../../../common/std-props'
import { IconButton, Icon, Divider } from 'rsuite'
//@ts-ignore
import styles from './index.css'
import PProps from '../PProps'
export default function (props: PProps) {
    return <div {...props}>
        <div className={`${styles.bg} h-100 w-100 d-flex flex-column text-md-center`}>

            <div className="flex-grow-0 container">
                <h1 className="animated zoomIn slower delay-1s">How</h1>
                <h2 className="animated zoomIn slower delay-2s">does it feel</h2>
                <h3 className="animated zoomIn slower delay-2s">got no one on your side?</h3>
            </div>

            <div className="flex-grow-1 container d-flex flex-column justify-content-center">
                <h5 className="animated fadeInUp slow delay-4s">现在,我们可以依靠彼此</h5>
                <h5 className="animated fadeIn slower delay-5s">放心...放心...</h5>
                <h2 className="animated fadeInUp slower delay-7s">我爱你,你也爱我</h2>
                <h6 className="animated fadeInUp slow delay-10s">过去,现在,未来</h6>
                <h6 className="animated fadeInUp slow delay-12s">相爱,爱着,要爱</h6>
            </div>

            <div className="flex-grow-0 animated fadeIn delay-15s">
                <IconButton onClick={props.onRequestNext} className="animated infinite slow bounce d-block mr-auto ml-auto"
                    icon={<Icon icon="arrow-down2" />} circle />
                <br /><br />
            </div>


        </div>
    </div>
}