import { useEffect } from "react";
import * as topPace from '../view-helper/top-pace'
import useRestorable from './useRestorable'
export type PercentSetter = (percent: number) => Promise<unknown>;
export type PercentGetter = () => number;
export default function (): [PercentGetter, PercentSetter] {
    let abandoned = false;
    const setter = async (percent:number)=>{
        if(abandoned)return;
        await topPace.percentSetterAnimated(percent);
    } 
    const getter = topPace.percentGetter;
    useRestorable(() => {
        return () => {
            topPace.percentSetter(-1);
            abandoned = true;
        }
    });
    return [getter, setter];
}