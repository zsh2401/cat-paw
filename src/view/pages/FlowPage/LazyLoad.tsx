import IStdProps from '../../../common/std-props'
import React from 'react';
export interface ILazyLoadProps extends IStdProps {
    request: "ready" | "load";
    children: any;
}
export default function LazyLoad(props: ILazyLoadProps) {
    if (props.request === "ready") {
        return <div {...props}><h1/></div>
    } else {
        return <div {...props}>{props.children}</div>
    }
}