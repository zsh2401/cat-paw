import React from 'react'
//@ts-ignore
import style from './index.css'
import { useHistory, Switch, Route } from 'react-router';
import LetterList from './LetterList';
import Reader from './LetterReader';

export default function Letters({ match }: any) {
    return <Switch>
        <Route exact path={`/read/loveletters`} component={LettersIndex}></Route>
        <Route path={`/read/loveletters/:id`} component={Reader}></Route>
    </Switch>
}
function LettersIndex() {
    const history = useHistory();
    return <div>
        <div className={style.head}>
            <div className="container h-100 d-flex flex-column text-white" style={{ paddingTop: "20px" }}>
                <div className="d-flex text-center flex-column flex-grow-1 justify-content-end">
                    <h1>Love Letters</h1>
                    <br />
                </div>
            </div>
        </div>

        <div className="container" style={{ maxWidth: "600px" }}>
            <br />
            <LetterList />
        </div>
    </div>
}