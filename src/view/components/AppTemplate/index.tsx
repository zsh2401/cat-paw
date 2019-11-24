import React, { HTMLAttributes } from 'react'
import NavBar from '../NavBar'
import debugMx from '../../../common/debug-mx';
import { Divider } from 'rsuite';
import { Link } from 'react-router-dom';
import Footer from '../Footer';
export interface IAppTemplateProps extends React.Props<any> {
    container?: boolean;
    nonavbar?: boolean;
    nofooter?: boolean;
}
export default function (props: IAppTemplateProps) {
    let containerClassName = props.container === false ? "" : "container";
    return <div>
        <div className="w-100 h-100 d-flex flex-column">
            <div className="flex-grow-0">
                {
                    props.nonavbar === true ? null : <NavBar />
                }
            </div>

            <div className={`flex-grow-1 d-flex flex-column flex-stretch ${containerClassName}`}>
                {props.children}
            </div>

            <div className="flex-grow-0">
                {
                    props.nofooter === true ? null : <Footer />
                }
            </div>
            
        </div>
    </div>
}