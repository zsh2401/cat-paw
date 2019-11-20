import React, { useEffect, useState } from 'react'
import _ from 'lodash'
export interface ResponsiveRatioWrapperProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    ratio?: [number, number];
}
function getH(width: number, ratio: [number, number] = [16, 9]): number {
    const n = 1.0 * ratio[1] / ratio[0];
    return width * n;
}
export default function (props: ResponsiveRatioWrapperProps) {
    let [height, heightSetter] = useState(0);
    let {ratio,...attr} = props;
    let domDiv: HTMLDivElement;
    useEffect(() => {
        const resizer = _.debounce(() => {
            let w = domDiv.clientWidth;
            let h = getH(w, props.ratio)
            heightSetter(h);
        });
        resizer();
        window.addEventListener("resize", resizer);
        return () => {
            window.removeEventListener("resize", resizer);
        }
    });
    return <div {...attr} ref={wrapperDiv => {
        domDiv = wrapperDiv as HTMLDivElement;
    }
    }>
        <div className="w-100" style={{ height: height + "px" }}>
            {props.children}
        </div>
    </div>
}