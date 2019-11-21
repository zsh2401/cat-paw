import IStdProps from '../../../common/std-props'
import React, { ReactNode } from 'react';
import { JsxElement } from 'typescript';
export interface ILazyLoadProps extends IStdProps {
    request: "ready" | "load";
    children: any;
}
export default function LazyLoad(props: ILazyLoadProps) {
    console.log( props);
    if (props.request === "ready") {
        return <div {...props}>.</div>
    } else {
        return props.children;
    }
}