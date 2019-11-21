import { CSSProperties } from "react";

export default interface IStdProps extends React.Props<any>{
    className?:string;
    id?:string;
    style?:CSSProperties;
}