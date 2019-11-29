import React from 'react'
import { Timeline } from 'rsuite'
import letters, { Letter } from './letters'
import { Link } from 'react-router-dom'
export default function () {
    return <div>
        <Timeline>
            {letters.map((letter:any) => <Timeline.Item>
                <LetterCard {...letter} />
            </Timeline.Item>)}
        </Timeline>
        <br />
        <br />
        <img className="img-fluid d-block mr-auto ml-auto" style={{ height: "5vh" }} src={require("./tbc.jpg")} />
        <br />
    </div>
}

function LetterCard(props: Letter) {
    return <div>
        <p>{props.time}</p>
        <div className="d-flex">
            <div className="flex-grow-1">
                <h3>{props.title}</h3>
                <p>{props.description}</p>
            </div>
            <div className="flex-grow-0">
                {
                    //@ts-ignore 
                    <Link to={"/read/loveletters/" + props.id}>查看</Link>
                }
            </div>
        </div>
    </div>
}