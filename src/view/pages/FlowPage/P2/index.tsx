import React, { CSSProperties } from 'react'
import StdProps from '../../../../common/std-props'
import { useEffectOnce } from 'react-use'
import Swiper from 'swiper';
import { Avatar, IconButton, Icon, Divider } from 'rsuite';
import { width } from 'dom-helpers';
import _ from 'lodash'
export interface P2Props extends StdProps {
    onAudioPlaying: () => void;
    onAudioPaused: () => void;
}
export default function (props: StdProps) {
    let swiper: Swiper;
    let divElement: HTMLDivElement;
    useEffectOnce(() => {
        swiper = new Swiper(divElement, {
            direction: "horizontal",
            slidesPerView: 2,
            spaceBetween: 30,
            centeredSlides: true,
            loop: true,
        });
        return () => {
            swiper.destroy(true, true);
        }
    });
    return <div {...props}>
        <br/>
        <h3 className="animated fadeIn text-center">伴随..一首音乐</h3>
        <div className="w-100 h-100 d-flex flex-column justify-content-center">
            <div>
                <div className="swiper-container" style={{ height: "250px" }} ref={(e) => divElement = e as HTMLDivElement}>
                    <div className="swiper-wrapper">
                        <div className="swiper-slide text-white">
                            <Disc imgSrc={require("../P1/wallhaven-2k3ylx.jpg")} />
                        </div>
                        <div className="swiper-slide text-white">
                            <div style={discOuter}>
                                <div style={discInner}></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mr-auto ml-auto text-center">
                    <Divider/>
                    <h3>Komn Sweet death...</h3><br/>
                    <IconButton circle size="lg" icon={<Icon icon="pause" />} />
                </div>
            </div>

        </div>
    </div>
}
interface DiscProps {
    imgSrc?: string;
}
function Disc(props: DiscProps) {
    let sty = _.defaults({ background: `url(${props.imgSrc})` }, discInner);
    return <div style={discOuter}>
        <div style={sty}></div>
    </div>
}
const discOuter: CSSProperties = {
    marginTop:"10px",
    height: "200px",
    width: "200px",
    borderRadius: "50%",
    backgroundColor: "black",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    boxShadow: "0px 0px 10px black"
}
const discInner: CSSProperties = {
    height: "130px",
    width: "130px",
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: "50%",
    backgroundSize: "cover",
    borderColor: "gray",
    borderStyle: "solid",
    borderWidth: "3px",
    background: "red"
}