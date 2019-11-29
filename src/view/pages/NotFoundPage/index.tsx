import React, { useState } from 'react'
import {useTitle,useEffectOnce} from '../../../common/hooks/'
import { Template} from '../../components'
import { Link, useHistory } from 'react-router-dom';
import HWCenter from '../../components/HWCenter';
import useTicker from '../../../common/hooks/useTicker';
const GOBACK_SECONDS = 10;
export default function NotFoundPage() {
    let history = useHistory();
    let [lastSencond,setLastSecond] = useState(GOBACK_SECONDS);

    useTicker(()=>{
        if(lastSencond === 0){
            history.go(-1);
            return false;
        }else{
            setLastSecond(--lastSencond);
            return true;
        }
    },1000);

    useTitle("404 NOT FOUND!");
    return <Template>
        <HWCenter>
            <img className="img-fluid d-block mr-auto ml-auto" src={require("../../../app/icon/icon.png")}></img>
            <h1>404 NOT FOUND!</h1>
            <Link to="/" className="d-block text-center">Back to home page ({lastSencond})</Link>
        </HWCenter>
    </Template>
}
