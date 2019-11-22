import IStdProps from '../../../common/std-props'
import React, { ReactNode } from 'react';
import { JsxElement } from 'typescript';
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