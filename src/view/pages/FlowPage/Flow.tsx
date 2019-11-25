const _______DEBUG_SLIDE________ = 0;
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
import useBackToTop from '../../../common/hooks/useBackToTop';

export default function FlowPage() {
    let element: HTMLDivElement;
    let swiper: Swiper;

    let __initRequests: Array<"load" | "ready"> = ["load"];
    for (let i = 1; i < 11; i++) {
        __initRequests.push("ready");
    }
    let [requests, requestsSetter] = useState(__initRequests);
    let [slideToNext, setSlideToNext] = useState({ fn: () => { } })
    useEffectOnce(() => {
        swiper = new Swiper(element, {
            direction: "vertical",
            mousewheel: true,
            speed: 1000,
            initialSlide: 0,
        });
        setSlideToNext({ fn: () => swiper.slideNext() });

        swiper.on("slideChange", () => {
            let crtSlide = swiper.realIndex;
            if (requests[crtSlide] === "ready") {
                requests[crtSlide] = "load";
                requestsSetter(requests.map((r) => r));
            }
        });

        if (process.env.NODE_ENV === "development") {
            swiper.slideTo(_______DEBUG_SLIDE________);
        }

        return () => {
            swiper.destroy(true, true);
        }
    });
    return <div ref={(e) => element = e as HTMLDivElement} className="swiper-container h-100 w-100">
        <div className="swiper-wrapper">

            <LazyLoad className="swiper-slide w-100 h-100" request={requests[0]}>
                <P1 onRequestNext={slideToNext.fn} />
            </LazyLoad>

            <LazyLoad className="swiper-slide w-100 h-100" request={requests[1]}>
                <P2 className="animated fadeIn delay-1s slow" />
            </LazyLoad>

            <LazyLoad className="swiper-slide w-100 h-100" request={requests[2]}>
                <P3 onRequestNext={slideToNext.fn} />
            </LazyLoad>

            <LazyLoad className="swiper-slide w-100 h-100" request={requests[3]}>
                <P4 onRequestNext={slideToNext.fn} />
            </LazyLoad>

            <LazyLoad className="swiper-slide w-100 h-100" request={requests[4]}>
                <P5 onRequestNext={slideToNext.fn} />
            </LazyLoad>

            <LazyLoad className="swiper-slide w-100 h-100" request={requests[5]}>
                <P6 onRequestNext={slideToNext.fn} />
            </LazyLoad>

            <LazyLoad className="swiper-slide w-100 h-100" request={requests[6]}>
                <P7 onRequestNext={slideToNext.fn} />
            </LazyLoad>

            <LazyLoad className="swiper-slide w-100 h-100" request={requests[7]}>
                <P8 onRequestNext={slideToNext.fn} />
            </LazyLoad>

            <LazyLoad className="swiper-slide w-100 h-100" request={requests[8]}>
                <P9 onRequestNext={slideToNext.fn} />
            </LazyLoad>

            <LazyLoad className="swiper-slide w-100 h-100" request={requests[9]}>
                <P10 onRequestNext={slideToNext.fn} />
            </LazyLoad>

            <LazyLoad className="swiper-slide w-100 h-100" request={requests[10]}>
                <P11 />
            </LazyLoad>
        </div>
    </div>
}