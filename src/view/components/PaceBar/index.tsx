import * as React from 'react';
//@ts-ignore
import paceStyle from "./pace.css"
export interface IPaceBarProps {
        fixed?:boolean;
        percent:number;
        className?:string;
        innerClassName?:string;
        visible?:boolean;
}
export interface IPaceBarState {
        percent:number;
}
export default class PaceBar extends React.Component<IPaceBarProps, IPaceBarState> {
    constructor(props: IPaceBarProps) {
        super(props);
        this.state = {
            percent:0
        }
    }
    componentDidMount(){
        this.onPercentUpdate();
    }
    componentDidUpdate(prevProps:IPaceBarProps,prevState:IPaceBarState){
        if(prevProps.percent !== this.props.percent){
            this.onPercentUpdate();
        }
    }
    private cutPercentValue(value:number){
        if(value >= 100)return 100;
        else if(value <= 0)return 0;
        else return value;
    }
    private onPercentUpdate(){
        this.play();
    }
    private play(){
        this.playNextPercent();
    }
    private getNextPercentValue(){
        let v = this.props.percent > this.state.percent ? 
        this.state.percent + 1 : this.state.percent -1;
        return this.cutPercentValue(v);
    }
    private playNextPercent(){
        if(this.state.percent !== this.props.percent){
            this.setState({
                percent:this.getNextPercentValue()
            });
            requestAnimationFrame(this.playNextPercent.bind(this));
        }
    }
    public render() {
        return (
        <div className={`${paceStyle.paceWrapper}` + (this.props.className || "")} 
                style={{visibility:this.props.visible === false ? "hidden" : "visible", position: this.props.fixed ? "fixed" : undefined}}>
            <div className={"pace-inner " + (this.props.innerClassName || "")}
                style={{width:this.state.percent + "%"}}
            ></div>
        </div>
        );
    }
}
