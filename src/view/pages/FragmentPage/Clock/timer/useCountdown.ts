import {Time} from '../index'
import useTicker from '../../../../../common/hooks/useTicker'
import { getSpan,msToTimeArr,toTime } from '.';
export default function useCountdown(target: Date, ticker: (newTime:Time) => void) {
    useTicker(()=>{
        const ms = getSpan(target,new Date());
        const timeArr = msToTimeArr(ms);
        ticker(toTime(timeArr));
        return true;
    },1000);
}