import React from 'react'
import StdProps from '../../../../common/std-props'
//@ts-ignore
import style from './index.css'
import { Divider, IconButton, Icon } from 'rsuite'
import PProps from '../PProps'
export default function (props: PProps) {
    return <div {...props}>
        <div className={`${style.bg} h-100 w-100 d-flex flex-column container`}>
            <div className="flex-grow-1 d-flex flex-column justify-content-center">
                <div className="jumbotron jumbotron-fluid bg-transparent text-center">
                    <Divider className="animated fadeIn">
                        <h1 style={{ textDecoration: "underline" }}>
                            <span className="animated fadeIn delay-1s slower">L.</span>
                            <span className="animated fadeIn delay-2s slower">Y.</span>
                            <span className="animated fadeIn delay-3s slower">F.</span>
                            <span className="animated fadeIn delay-4s slower">G.</span>
                        </h1>
                    </Divider>

                    <p className="animated fadeIn delay-4s slower">Love Yin For Good</p>
                    <br /><br />
                    <h4 className="animated fadeIn delay-5s slower">从来不是说说那么简单</h4>
                    <br />
                    <h2 className="animated fadeInUp delay-7s slower">我<span className="animated fadeIn delay-9s slower">保证</span></h2>
                    <br />
                    <div className="animated fadeIn delay-10s slower">
                        <IconButton size="lg" onClick={props.onRequestNext}
                            className="animated infinite slow bounce d-block mr-auto ml-auto bg-transparent text-white"
                            icon={<Icon icon="angle-double-down" />} circle />
                    </div>
                </div>
            </div>

            <div className="flex-grow-0 animated fadeIn delay-10s slower">
                <p className="font-italic text-center">
                    We were born from light before there even was a dawn<br />
                    So pure so bright</p>
                <br />
            </div>
        </div>
    </div>
}