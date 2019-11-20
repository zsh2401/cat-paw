import { useRef, useEffect } from "react";
export type destroyingExecutor = ()=>void;
export type nowExecutor = ()=>destroyingExecutor | undefined;
export default function useRestorable(now:nowExecutor){
    const _destroyingExecutor = now();
    if(_destroyingExecutor){
        useEffect(()=>_destroyingExecutor,[])
    }
}