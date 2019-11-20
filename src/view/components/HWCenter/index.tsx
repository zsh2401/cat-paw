import React from 'react'
export default function(props:React.Props<any>){
    return <div className="w-100 h-100 d-flex flex-row justify-content-center">
        <div className="h-100 d-flex flex-column justify-content-center">
            <div>
            {props.children}
            </div>
        </div>
    </div>
}