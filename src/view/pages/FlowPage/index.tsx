import React from 'react'
import LoadableComponent from '../../components/LoadableComponent'
import FlowPage from './Flow'
// export default function(){
//     return <LoadableComponent loader={()=>import(/*webpackChunkName:"flow" */ "./Flow")}/>
// }
export default function(){
    return <FlowPage/>
}