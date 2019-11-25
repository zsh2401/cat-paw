import React from 'react'
import { useEffectOnce } from 'react-use'
export default function () {
    useEffectOnce(() => {
        document.getElementById('app')!.scrollIntoView(true);
    });
}