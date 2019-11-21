import React, { useState } from 'react'
import { useEffectOnce } from 'react-use';
import Swiper from 'swiper'
import P1 from './P1';
import P2 from './P2';
import P3 from './P3';
import P4 from './P4';
import P5 from './P5';
import P6 from './P6';
import P7 from './P7';
import P8 from './P8';
import P9 from './P9';
import P10 from './P10';
import P11 from './P11';
import LazyLoad from './LazyLoad';
export default function FlowPage() {
    let element: HTMLDivElement;
    let swiper: Swiper;
    let __initRequests: Array<"load" | "ready"> = [];
    for (let i = 0; i < 11; i++) {
        __initRequests.push("ready");
    }
    let [requests, requestsSetter] = useState(__initRequests);
    const onRequestNext = () => {
        swiper.slideNext();
    }
    useEffectOnce(() => {
        swiper = new Swiper(element, {
            direction: "vertical",
            mousewheel: true,
            speed: 1000,
        });
        swiper.on("slideChange", () => {
            let crtSlide = swiper.realIndex;
            if (requests[crtSlide] === "ready") {
                requests[crtSlide] = "load";
                requestsSetter(requests);
            }
        });
        return () => {
            swiper.destroy(true, true);
        }
    });
    return <div ref={(e) => element = e as HTMLDivElement} className="swiper-container h-100 w-100">
        <div className="swiper-wrapper">

            <P1 onRequestNext={onRequestNext} className="swiper-slide w-100 h-100" />
            <LazyLoad className="swiper-slide w-100 h-100" request={requests[1]}>
                <P2 />
            </LazyLoad>
            <P3 className="swiper-slide w-100 h-100 " />
            <P4 className="swiper-slide w-100 h-100 " />
            <P5 className="swiper-slide w-100 h-100 " />
            <P6 className="swiper-slide w-100 h-100 " />
            <P7 className="swiper-slide w-100 h-100 " />
            <P8 className="swiper-slide w-100 h-100 " />
            <P9 className="swiper-slide w-100 h-100 " />
            <P10 className="swiper-slide w-100 h-100 " />
            <P11 className="swiper-slide w-100 h-100 " />
        </div>
    </div>
}