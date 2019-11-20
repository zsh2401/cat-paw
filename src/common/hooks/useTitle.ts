import { useEffect } from "react";
export default function useTitle(title:string){
    useEffect(()=>{
        let lastTitle = document.title;
        document.title = title;
        return ()=>{
            document.title = lastTitle;
        }
    },[]);
}