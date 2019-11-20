import { CSSProperties } from "react";

export default interface StdProps{
    className?:string;
    id?:string;
    style?:CSSProperties;
    children?: React.ReactNode;
}