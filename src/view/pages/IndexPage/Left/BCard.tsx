import React, { CSSProperties } from 'react'
import { useHistory } from 'react-router';
import StdProps from '../../../../common/std-props'
import _ from "lodash"
export interface BCardProps extends StdProps {
    name: string;
    description: string;
    to: string;
    external?: boolean;
}
const BCardOuterStyle: CSSProperties = {
    // height: "100px",
    width: "100%",
}
const BCardInnerStyle: CSSProperties = {
    borderRadius: "3px",
    margin: "10px",
    boxShadow: "0px 0px 3px black",
    // height: "80px",
    padding: "5px"
    // width: "100%",
}
export default function (props: BCardProps) {
    let { name, description, to, style, external, ...attr } = props;
    style = _.defaults(style, BCardInnerStyle);

    const history = useHistory();
    const pusher = () => {
        if (external)
            window.open(to)
        else
            history.push(to);
    }

    //@ts-ignore
    return <div className="col-sm-6" style={BCardOuterStyle} onClick={pusher}>
        <div style={style}  {...attr}>
            <h4>{name}</h4>
            <div>{description}</div>
        </div>
    </div>
}