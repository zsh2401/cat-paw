import React from 'react'
import DefaultHolder from './DefaultHolder';
export type LoadableComponentStatus = 
    "pending"|"loading"|"loaded"|"delaying"|"error"|"timeouted";

export interface LoadableComponentProps{
    statusChanged?:(newStatus:LoadableComponentStatus,arg:any)=>void;

    loader?:()=>Promise<any>;
    modulePath?:string;

    delay?:number;
    timeout?:number;

    placeHolder?:React.ReactType;
}
export interface LoadableComponentState{
    component:React.ReactType;
    status:LoadableComponentStatus;
    statusArg:any;
}
export default class LoadableComponent extends React.Component<LoadableComponentProps,LoadableComponentState>{
    constructor(props:LoadableComponentProps){
        super(props);
        this.state = {
            component:this.props.placeHolder || DefaultHolder,
            status:"pending",
            statusArg:null,
        }
    }
    private changeStatus(newStatus:LoadableComponentStatus,arg?:any){
        this.props.statusChanged && this.props.statusChanged(newStatus,arg);
        this.setState({
            status:newStatus,
            statusArg:arg
        });
    }
    componentDidMount(){
        if(this.props.loader){
            this.loadAsync(this.props.loader);
        }else if(this.props.modulePath){
            this.loadAsync(()=>import(this.props.modulePath as string));
        }else{
            this.changeStatus("error","There is no any target to load!");
        }
    }
    private async loadAsync(loader:()=>Promise<any>){
        let that = this;
        setTimeout(()=>{
            if(that.state.status === "loading"){
                this.changeStatus("timeouted");
            }
        },this.props.timeout || 10000);
        try{
            this.changeStatus("loading");
            
            let componentType = (await loader()).default;

            if(this.state.status === "loading"){
                await this.updateUI(componentType);

                this.changeStatus("loaded");
            }
        }catch(err){
            if(this.state.status === "loading"){
                this.changeStatus("error",err);
            }
        }
    }
    private updateUI(componentType:React.ReactType):Promise<any>{
        let that = this;
        this.changeStatus("delaying");
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                try{
                    that.setState({
                        component:componentType
                    });
                    resolve();
                }catch(err){
                    reject(err);
                }
            },this.props.delay || 1)
        });
    }
    render(){
        let Component = this.state.component;
        return <Component loadableStatus={this.state.status} loadableStatusArg={this.state.statusArg}/>;
    }
}
