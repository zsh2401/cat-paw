import React from 'react';
import { LoadableComponentStatus } from '.';

export interface IDefaultHolderProps {
    loadableStatus:LoadableComponentStatus;
    loadableStatusArg:any;
}
export interface IDefaultHolderState {
}

export default class DefaultHolder extends React.Component<IDefaultHolderProps, IDefaultHolderState> {
    constructor(props: IDefaultHolderProps) {
        super(props);

        this.state = {
        }
    }

    public render() {
        switch(this.props.loadableStatus){
            case "pending":
            case "loading":
            case "delaying":
                return <div>Loading</div>
            case "timeouted":
                return <div>Timeout!</div>
            case "error":
                return <div>Error:{this.props.loadableStatusArg}</div>
            default:
                return <div>Error</div>
        }
  }
}
