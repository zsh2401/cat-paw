import React, { HTMLAttributes } from 'react'
import NavBar from '../NavBar'
import debugMx from '../../../common/debug-mx';
export interface IAppTemplateProps extends React.Props<any>{
    container?:boolean;
}
export default function(props:IAppTemplateProps){
    let containerClassName = props.container === false ? "" : "container";
    return <div>
        <div className="w-100 h-100 d-flex flex-column">
            <NavBar/>
            <div className={`flex-grow-1 ${containerClassName}`}>
                {props.children}
            </div>
            <footer className="flex-grow-0">
                <p className="text-center">
                    Copyright © 2017 - {new Date().getFullYear()} {debugMx.AUTHOR},All Rights Reserved
                    <br/>Love Yin For Good</p>
            </footer>
        </div>
    </div>
}