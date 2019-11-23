import React from 'react'
import StdProps from '../../../../common/std-props'
import { IconButton, Icon, Divider } from 'rsuite'
//@ts-ignore
import styles from './index.css'
import PProps from '../PProps'
export default function (props: PProps) {
    return <div {...props}>
        <div className={`${styles.bg} h-100 w-100 d-flex flex-column`}>
            <div className="flex-grow-1 container">
                <br /><br />

                <div className="d-none d-md-block text-center">
                    <h1>How does it feel got no one on your side?</h1>
                    <br />      <br />      <br />
                    <p>现在,我们可以依靠彼此</p>
                </div>

                <div className="d-xs-block d-sm-none">
                    <div  >
                        <h1 className="animated zoomIn slower delay-1s">How</h1>
                        <h2 className="animated zoomIn slower delay-2s">does it feel</h2>
                        <h3 className="animated zoomIn slower delay-2s"> got no one on your side?</h3>
                    </div>
                    <br />      <br />      <br />
                    <h5 className="animated fadeInUp slow delay-4s">现在,我们可以依靠彼此</h5>
                    <h5 className="animated fadeIn slower delay-5s">放心...放心...</h5>
                    <br />
                    {/* <h6 className="animated fadeInUp slow delay-7s">这个世界上,最棒的事儿,就是</h6> */}
                    <h2 className="animated fadeInUp slower delay-7s">我爱你,你也爱我</h2>
                    <h6 className="animated fadeInUp slow delay-10s">过去,现在,未来</h6>
                    <h6 className="animated fadeInUp slow delay-12s">相爱,爱着,要爱</h6>
                    <br /><br/>
                    {/* <Divider></Divider> */}
                    <p className="font-italic animated fadeInUp slow delay-13s">I wanted to be with you alone</p>
                </div>
            </div>

            <div className="flex-grow-0 animated fadeIn delay-13s">
                <IconButton onClick={props.onRequestNext} className="animated infinite slow bounce d-block mr-auto ml-auto"
                    icon={<Icon icon="arrow-down2" />} circle />
                <br /><br />
            </div>
        </div>
    </div>
}