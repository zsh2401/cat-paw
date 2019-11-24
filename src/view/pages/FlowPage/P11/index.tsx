import React, { useState } from 'react'
import StdProps from '../../../../common/std-props'
import { Divider, Button } from 'rsuite'
import BilibiliVideo from '../../../components/BilibiliVideo'
import { useHistory } from 'react-router'
import { useEffectOnce } from 'react-use'
function pauseAllAudio() {
    let audios = document.getElementsByTagName("audio");
    for (let i = 0; i < audios.length; i++) {
        audios[i].pause();
    }
}
function audioPlaying(): boolean {
    let audios = document.getElementsByTagName("audio");
    for (let i = 0; i < audios.length; i++) {
        if (!audios[i].paused) return true;
    }
    return false;
}
export default function (props: StdProps) {
    let history = useHistory();
    let [displayPauseBtn, setDisplayPauseBtn] = useState(false);
    useEffectOnce(() => {
        pauseAllAudio();
        let interval = setInterval(() => {
            if (audioPlaying()) {
                setDisplayPauseBtn(true);
            } else {
                setDisplayPauseBtn(false);
            }
        }, 500);
        return () => {
            clearInterval(interval);
        }
    });
    return <div {...props}>
        <div className="h-100 w-100 d-flex flex-column text-white justify-content-center" style={{ background: "black" }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <BilibiliVideo name="fuck" src="//player.bilibili.com/player.html?aid=67218266&cid=116551899&page=1" />
                        <br />
                        <Button style={{ visibility: displayPauseBtn ? "visible" : "collapse" }} className="d-block mr-auto ml-auto border-white text-white" appearance="ghost" onClick={pauseAllAudio}>暂停音乐</Button>
                    </div>
                    <div className="col-md-6">
                        <h3 className="animated fadeIn slower">好啦,小笨蛋</h3>
                        <p>
                            <span className="animated fadeIn delay-2s slower">滑滑会一直爱着你鸭<br /></span>
                            <span className="animated fadeIn delay-5s slower">守护与陪伴的含义,我理解<br /></span>
                            <span className="animated fadeIn delay-8s slower">记住,无论是什么处境,你都至少有我鸭<br /></span>
                            <br />
                            <span className="animated fadeIn delay-11s slower">我想</span>
                            <span className="animated fadeIn delay-13s slower">与你做每一件美好的事,<br /></span>
                            <span className="animated fadeIn delay-15s slower">我想</span>
                            <span className="animated fadeIn delay-17s slower">与你度过每一个难关,<br /></span>
                            <span className="animated fadeIn delay-19s slower">我想</span>
                            <span className="animated fadeIn delay-21s slower">与你在一起,<br /></span>
                            <span className="animated fadeIn delay-23s slower">我想你</span>
                            <span className="animated fadeIn delay-25s slower">,每一刻<br /></span>
                        </p>

                    </div>
                </div>
                <div className="animated fadeIn delay-27s slower">
                    <Divider><h4>The End</h4></Divider>
                    <Button appearance="ghost" style={{ borderColor: "white", color: "white" }}
                        className="d-block mr-auto ml-auto"
                        onClick={() => history.go(-1)}>返回主页</Button>
                    <br/>
                </div>

            </div>
        </div>
    </div>
}