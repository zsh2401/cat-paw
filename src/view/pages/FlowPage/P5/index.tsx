import React from 'react'
import StdProps from '../../../../common/std-props'
import PProps from '../PProps';
//@ts-ignore
import weatherStyle from './weather.css'
//@ts-ignore
import style from './index.css'
import { IconButton, Icon } from 'rsuite';

export default function (props: PProps) {
    return <div {...props}>
        <div className={`${weatherStyle.weatherbg} h-100 w-100 d-flex flex-column`}>
            <div className="flex-grow-1 container text-center d-flex flex-column justify-content-center">
                <p className="animated fadeIn slower delay-1s">我希望,我希望</p>
                <h3 className="animated fadeIn slow delay-3s">我们可以一直走下去</h3>
                <div className="animated fadeIn slow delay-6s" >
                    <div className={`${weatherStyle.weather} ${weatherStyle.snowy}`}></div>
                    <p className="text-center">坚信着这份爱,不畏流言蜚语</p>
                </div>
                <br />
                <div className="animated fadeIn slow delay-10s">
                    <div className={`${weatherStyle.weather} ${weatherStyle.sunny}`}></div>
                    <p>我们可以成功</p>
                </div>
            </div>

            <div className="flex-grow-0 animated fadeIn delay-12s">
                <IconButton onClick={props.onRequestNext} className="animated infinite slow bounce d-block mr-auto ml-auto"
                    icon={<Icon icon="arrow-down2" />} circle />
                <br /><br />
            </div>
        </div>
    </div>
}