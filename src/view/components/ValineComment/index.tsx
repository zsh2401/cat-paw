const APP_ID = "2CqAAvg27W6dKBirB7aUpgn8-gzGzoHsz";
const APP_KEY = "Df81krAxCYlu9N7q22fwHe5y";
const PLACE_HOLDER = "说点什么吧!";


import React from 'react'
import idm from '../../../common/id-manager'

//@ts-ignore
window.AV = require('leancloud-storage')
//@ts-ignore
import Valine from 'valine'
export interface ValineCommentProps{
    path?:string;
}
export default class ValineComment extends React.Component<ValineCommentProps>{
    private id = idm.allocate();
    componentDidMount(){
        //@ts-ignore
        new Valine({
            
            el:"#" + this.id,
            appId:APP_ID,
            appKey:APP_KEY,
            path:this.props.path || null,
            placeholder:PLACE_HOLDER,
            visitor:true
        });
    }
    render(){
        return <div id={this.id}></div>
    }
    componentWillUnmount(){
        idm.free(this.id)
    }
}