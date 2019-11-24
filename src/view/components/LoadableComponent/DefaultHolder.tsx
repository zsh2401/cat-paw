import React from 'react';
import { LoadableComponentStatus } from '.';
import { Loader } from 'rsuite';

export interface IDefaultHolderProps {
    loadableStatus: LoadableComponentStatus;
    loadableStatusArg: any;
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
        switch (this.props.loadableStatus) {
            case "pending":
            case "loading":
            case "delaying":
                return <Loading />
            case "timeouted":
                return <div>Timeout!</div>
            case "error":
                return <div>Error:{this.props.loadableStatusArg}</div>
            default:
                return <div>Error</div>
        }
    }
}
function Loading() {
    return <div className="h-100 w-100 d-flex flex-column justify-content-center">
        <div className="d-flex justify-content-center">
            <Loader size="sm" speed="slow" content="loading" />
        </div>
    </div>
}