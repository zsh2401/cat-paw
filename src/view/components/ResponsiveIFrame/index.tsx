import React from 'react'
import ResponsiveRatioWrapper from '../ResponsiveRatioWrapper'
export interface IResponsiveIFrameProps{
    src:string;
}
export default function(props:IResponsiveIFrameProps){
    return <ResponsiveRatioWrapper>
        {
            //@ts-ignore
            <iframe className="w-100 h-100" src={props.src} scrolling="no" border="0" frameBorder="no" framespacing="0" allowFullScreen></iframe>
        }
    </ResponsiveRatioWrapper>
}