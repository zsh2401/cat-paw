import React from 'react'
import StdProps from '../../../../common/std-props'
//@ts-ignore
import styles from './index.css'
import { IconButton, Icon } from 'rsuite'
import PProps from '../PProps'
export default function (props: PProps) {
    return <div {...props}>
        <div className={`${styles.bg} ${styles.f} d-flex flex-column  w-100 h-100 justify-content-center`}>
            <div className="d-flex flex-column justify-content-center container">
                <br/>
                <br/>
                <h1>好吧?</h1>
                <h3>确实讲了许多云里雾里的话</h3>
                <h2>我只是,只是想说...</h2>
            </div>

            <div className="animated fadeIn delay-7s">
                <br/><br/>
                <IconButton size="lg" onClick={props.onRequestNext} className="animated infinite slow bounce d-block mr-auto ml-auto bg-transparent"
                    icon={<Icon icon="angle-double-down" />} circle />
                <br /><br />
            </div>
        </div>
    </div>
}