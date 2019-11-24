import React, { CSSProperties, useState } from 'react'
import StdProps from '../../../../common/std-props'
import { useEffectOnce } from 'react-use'
import Swiper from 'swiper';
import { Avatar, IconButton, Icon, Divider } from 'rsuite';
import _ from 'lodash'
export interface P2Props extends StdProps {
    onAudioPlaying: () => void;
    onAudioPaused: () => void;
}
export default function (props: StdProps) {
    let swiper: Swiper;
    let divElement: HTMLDivElement;
    let [audioIndex, setAudioIndex] = useState(0);
    useEffectOnce(() => {
        swiper = new Swiper(divElement, {
            direction: "horizontal",
            // slidesPerView: 2,
            spaceBetween: 30,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            centeredSlides: true,
            loop: true,
        });
        swiper.on("slideChange", () => {
            setAudioIndex(swiper.realIndex);
        });
        return () => {
            swiper.destroy(true, true);
        }
    });
    return <div {...props}>
        <div className="w-100 h-100 d-flex flex-column">
            <div className="flex-grow-0">
                <h3 className="text-center font-weight-bold">伴随一首音乐</h3>
                <p className="text-center font-italic">“Without music, life would be a mistake” ― Friedrich Nietzsche</p>

            </div>

            <div className="flex-grow-1 d-flex flex-column justify-content-center">
                <div className="swiper-container container" style={{ height: "250px" }} ref={(e) => divElement = e as HTMLDivElement}>
                    <div className="swiper-wrapper">
                        {audios.map(a => {
                            return <div className="swiper-slide d-flex justify-content-center text-white">
                                <Disc {...a} />
                            </div>
                        })}
                    </div>
                    <div className="swiper-button-prev" style={{ color: "black" }}></div>
                    <div className="swiper-button-next" style={{ color: "black" }}></div>
                </div>

                <Player {...audios[audioIndex]} />
            </div>
        </div>
    </div>
}
//@ts-ignore
import discStyle from './disc.css'
import Player from './Player';
import audios, { AudioInfo } from './audios';
function Disc(props: AudioInfo) {
    return <div className={discStyle.disc}>
        <div className={discStyle.discImg} style={{ background: `url(${props.coverSrc})` }}></div>
    </div>
}