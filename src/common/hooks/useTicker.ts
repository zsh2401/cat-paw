import { useEffect } from "react";
export type ShouldContinueTick = boolean;
export default function (tickCallback: () => ShouldContinueTick, intervalMs: number = 1000, deps: readonly [] = []) {
    useEffect(() => {
        let destoryed = false;
        if (tickCallback()) {
            let interval = setInterval(() => {
                if (destoryed) {
                    clearInterval(interval);
                    return;
                }
                let should = tickCallback();
                if (!should) {
                    clearInterval(interval);
                }
            }, intervalMs);
        }
        return () => {
            destoryed = true;
        }
    }, deps);
}