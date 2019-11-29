import React from 'react'
import { useHistory } from 'react-router'
export default function useGoBack(){
    const history = useHistory();
    return ()=>{
        history.go(-1);
    }
}