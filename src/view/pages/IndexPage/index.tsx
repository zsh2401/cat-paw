import React from 'react'
import { LodableComponent } from '../../components'
import IndexPage from './IndexPage'
// export default function(){
//   return <LodableComponent loader={()=>import(/*webpackChunkName:"index"*/"./IndexPage")}/>
// }
export default function(){
  return <IndexPage/>
}