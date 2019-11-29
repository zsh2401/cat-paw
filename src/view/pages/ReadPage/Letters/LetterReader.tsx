import React from 'react'
import letters from './letters';
import { IconButton, Icon } from 'rsuite';
import { useHistory } from 'react-router';
export default function Reader(props: any) {
    const history = useHistory();
    const goBack = () => {
        history.go(-1);
    }

    let id = props.match.params.id;
    let one = letters.find(l => l.id.toString() === id);
    return <div >
        <div className="position-fixed w-100" style={{ paddingTop: "10px" }}>
            <div className="container">
                <IconButton onClick={goBack} icon={<Icon icon="back-arrow" />} circle size="sm" />
            </div>
        </div>
        <div className="container d-none d-md-block">
            {
                one ? <img src={one.imgSrc} className="d-block mr-auto ml-auto img-fluid" /> : "Not Found!"
            }
        </div>
        <div className="d-block d-sm-none">
            {
                one ? <img src={one.imgSrc} className="d-block mr-auto ml-auto img-fluid" /> : "Not Found!"
            }
        </div>
    </div>
}