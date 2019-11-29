import React from 'react'
import _ from 'lodash'
import ResponsiveRatioWrapper from '../ResponsiveRatioWrapper';
export interface BilibiliVideoProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    src: string;
    ratio?: [number, number]
    onLoad?:()=>void;
    borderRadius?:string;
    name?:string;
}
export default function(props:BilibiliVideoProps) {
    let {src,borderRadius,...attr} = props;
    return <ResponsiveRatioWrapper {...attr}>
        {
            //@ts-ignore
            <iframe style={{borderRadius}} name={props.name} onLoad={props.onLoad} className="w-100 h-100" src={src} scrolling="no" border="0" frameBorder="no" framespacing="0" allowFullScreen></iframe>
        }
    </ResponsiveRatioWrapper>
}