import { Time } from '..';

export {default as useCountdown} from './useCountdown'
export {default as useTimer} from './useTimer'
export function toTime(timeNumberArray:[number, number, number, number]):Time{
    return <Time>timeNumberArray.map(time=>complete2(time));
}
export function complete2(x: number) {
    if (x < 10) {
        return "0" + x;
    } else {
        return "" + x;
    }
}
export function msToTimeArr(ms: number): [number, number, number, number] {
    const days = ms / 1000 / 60 / 60 / 24;
    const daysRound = Math.floor(days);
    const hours = ms / 1000 / 60 / 60 - (24 * daysRound);
    const hoursRound = Math.floor(hours);
    const minutes = ms / 1000 / 60 - (24 * 60 * daysRound) - (60 * hoursRound);
    const minutesRound = Math.floor(minutes);
    const seconds = ms / 1000 - (24 * 60 * 60 * daysRound) - (60 * 60 * hoursRound) - (60 * minutesRound);
    const secondsRound = Math.floor(seconds);
    return [daysRound, hoursRound, minutesRound, secondsRound];
}
export function getSpan(x:Date,y:Date) {
    const totalMS = x.getTime() - y.getTime();
    return totalMS;
}