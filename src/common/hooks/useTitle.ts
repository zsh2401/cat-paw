import { useEffect, useRef } from "react";
interface UseTitleOptions {
    restoreOnUnmount?: boolean;
}
export default function useTitle(
    title: string,
    options: UseTitleOptions = { restoreOnUnmount: false }) {
    const prevTitle = useRef(document.title);
    useEffect(() => {
        document.title = title;
        if (options.restoreOnUnmount) {
            return () => {
                document.title = prevTitle.current;
            };
        } else {
            return () => { };
        }
    }, []);
}