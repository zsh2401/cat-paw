import React, { useState, useEffect } from 'react'
import { Divider, IconButton, Icon } from 'rsuite'
import { AudioInfo } from './audios'

export interface PlayerState {
    playing: boolean;
}
export default class Player extends React.Component<AudioInfo, PlayerState>{
    constructor(props: AudioInfo) {
        super(props);
        this.state = { playing: false }
    }
    private get audioElement(): HTMLAudioElement {
        return document.getElementById("_main_audio") as HTMLAudioElement;
    }
    private onClickButton() {
        if (this.state.playing) {
            this.audioElement.pause();
        } else {
            this.audioElement.play();
        }
    }
    componentDidMount() {
        this.audioElement.addEventListener("pause", () => this.onPuase());
        this.audioElement.addEventListener("playing", () => this.onPlaying());
        this.audioElement.volume = 0.1;
        const that = this;
        if (process.env.NODE_ENV !== "development") {
            setTimeout(() => {
                that.audioElement.play();
            }, 2000);
        }
    }
    componentDidUpdate(prevProps: AudioInfo, prvState: PlayerState) {
        if (this.props.title !== prevProps.title) {
            this.audioElement.play();
        }
    }
    private onPlaying() {
        this.setState({
            playing: true,
        });
    }
    private onPuase() {
        this.setState({
            playing: false,
        });
    }
    render() {
        return <div className="mr-auto ml-auto text-center">
            <audio id="_main_audio" src={this.props.src} />
            <Divider />
            <h3>{this.props.title}</h3><br />
            <p>{this.props.description}</p><br />
            <IconButton circle size="lg" icon={<Icon icon={this.state.playing ? "pause" : "play2"} />} onClick={() => this.onClickButton()} />
        </div>
    }
}