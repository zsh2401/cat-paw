import React, { useState } from 'react'
import useTicker from '../../../../common/hooks/useTicker'
export default function Clock() {
    let [t, tSetter] = useState(["", "", "", ""]);

    useTicker(() => {
        const span = getSpanMS();
        const resultArray = getTimes(span);
        const r = resultArray.map(x => complete2(x));
        tSetter(r);
        return true;
    }, 1000)
    
    return <div>{t[0]}:{t[1]}:{t[2]}:{t[3]}</div>
}
function complete2(x: number) {
    if (x < 10) {
        return "0" + x;
    } else {
        return "" + x;
    }
}
function getTimes(ms: number): [number, number, number, number] {
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
const BEGIN = new Date(2019, 3, 14, 20, 0, 0);
function getSpanMS() {
    const now = new Date();
    const totalMS = now.getTime() - BEGIN.getTime();
    return totalMS;
}