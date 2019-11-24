import React, { Props } from 'react'
import { Steps, Panel, Timeline, Button, IconButton, Icon, Divider, Navbar } from 'rsuite';
//@ts-ignore
import style from './index.css'
import { useHistory, Switch, Route } from 'react-router';
import Footer from '../../../components/Footer';
import LetterList from './LetterList';
import Reader from './LetterReader';
import AppTemplate from '../../../components/AppTemplate';
import NavBar from '../../../components/NavBar';
export default function Letters({ match }: any) {
    return <Switch>
        <Route path={`${match.url}`} exact component={LettersIndex}></Route>
        <Route path={`${match.url}/:id`} component={Reader}></Route>
    </Switch>
}
function LettersIndex() {
    const history = useHistory();
    const goBack = () => {
        history.go(-1);
    }
    return <AppTemplate nonavbar container={false}>
        <NavBar className="sticky-top"/>
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
    </AppTemplate>
}