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
            <div className="flex-grow-1 container text-center">
                <br /><br /><br />
                <h4 className="animated fadeIn slower delay-1s">我希望,我希望</h4>
                <h2 className="animated fadeIn slow delay-3s">我们可以一直走下去</h2>

                <div className="animated fadeIn slow delay-6s" >
                    <div className={`${weatherStyle.weather} ${weatherStyle.snowy}`}></div>
                    <h4 className="text-center">坚信着这份爱<br />不畏流言蜚语</h4>
                </div>

                <br /> <br />
                <div className="animated fadeIn slow delay-10s">
                    <div className={`${weatherStyle.weather} ${weatherStyle.sunny}`}></div>
                    <h2>我们可以成功</h2>
                </div>
            </div>

            <div className="flex-grow-0 animated fadeIn delay-10s">
                <IconButton onClick={props.onRequestNext} className="animated infinite slow bounce d-block mr-auto ml-auto"
                    icon={<Icon icon="arrow-down2" />} circle />
                <br /><br />
            </div>
        </div>
    </div>
}