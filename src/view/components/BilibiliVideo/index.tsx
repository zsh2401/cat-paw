import React from 'react'
import _ from 'lodash'
import ResponsiveRatioWrapper from '../ResponsiveRatioWrapper';
export interface BilibiliVideoProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    src: string;
    ratio?: [number, number]
}
export default function(props:BilibiliVideoProps) {
    let {src,...attr} = props;
    return <ResponsiveRatioWrapper {...attr}>
        {
            //@ts-ignore
            <iframe className="w-100 h-100" src={src} scrolling="no" border="0" frameBorder="no" framespacing="0" allowFullScreen></iframe>
        }
    </ResponsiveRatioWrapper>
}