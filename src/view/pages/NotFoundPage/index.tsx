import React, { useState } from 'react'
import {useTitle,useEffectOnce} from '../../../common/hooks/'
import { Template} from '../../components'
import { Link, useHistory } from 'react-router-dom';
import HWCenter from '../../components/HWCenter';
import useTopPace from '../../../common/hooks/useTopPace';
import useTicker from '../../../common/hooks/useTicker';
const GOBACK_SECONDS = 10;
export default function NotFoundPage() {
    let history = useHistory();
    let [lastSencond,setLastSecond] = useState(GOBACK_SECONDS);

    let [,paceSetter] = useTopPace();
    useTicker(()=>{
        if(lastSencond === 0){
            history.go(-1);
            return false;
        }else{
            setLastSecond(--lastSencond);
            let percent = (lastSencond / GOBACK_SECONDS) * 100.0;
            paceSetter(percent);
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
