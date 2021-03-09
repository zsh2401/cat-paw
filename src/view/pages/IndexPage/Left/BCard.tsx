import React, { CSSProperties } from 'react'
import { useHistory } from 'react-router';
import StdProps from '../../../../common/std-props'
import _ from "lodash"
export interface BCardProps extends StdProps {
    name: string;
    description: string;
    to?: string;
    external?: boolean;
    onClick?: () => void;
}
const BCardOuterStyle: CSSProperties = {
    // height: "100px",
    cursor: "pointer",
    width: "100%",
}
const BCardInnerStyle: CSSProperties = {
    borderRadius: "3px",
    margin: "5px",
    boxShadow: "0px 0px 3px black",
    padding: "3px",
}
export default function (props: BCardProps) {
    let { name, description, to, style, onClick, external, ...attr } = props;
    style = _.defaults(style, BCardInnerStyle);

    const history = useHistory();
    const onClickHandler = () => {
        onClick && onClick();
        if (to) {
            if (external)
                window.open(to)
            else
                history.push(to);
        }
    }

    //@ts-ignore
    return <div className="col-md-6" style={BCardOuterStyle} onClick={onClickHandler}>
        <div style={style}  {...attr}>
            <h4>{name}</h4>
            <div>{description}</div>
        </div>
    </div>
}