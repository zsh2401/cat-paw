import React from 'react'
import { LodableComponent } from '../../components'
import AboutPage from './About'
// export default function AsyncAboutPage(){
//     return <LodableComponent loader={()=>import(/*webpackChunkName:"about"*/"./About")}/>
// }
export default function(){
    return <AboutPage/>
}