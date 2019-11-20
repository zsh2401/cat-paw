import { useEffect } from "react";
function useAnimation(frameRender: (isLastTime: boolean) => boolean) {
    let destoryed = false;
    useEffect(() => {
        const handler = () => {
            if (frameRender(destoryed)) {
                if (!destoryed) {
                    requestAnimationFrame(handler);
                }
            }
        }
        return () => {
            destoryed = true;
        }
    }, []);
}
export default window ? useAnimation : () => { };