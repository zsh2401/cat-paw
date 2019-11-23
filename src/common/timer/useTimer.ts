import {Time} from '../../view/pages/FragmentPage/Clock/index'
import useTicker from '../hooks/useTicker'
import { getSpan,msToTimeArr,toTime } from '.';
export default function useCountdown(begin: Date, ticker: (newTime:Time) => void) {
    useTicker(()=>{
        const ms = getSpan(new Date(),begin);
        const timeArr = msToTimeArr(ms);
        ticker(toTime(timeArr));
        return true;
    },1000);
}