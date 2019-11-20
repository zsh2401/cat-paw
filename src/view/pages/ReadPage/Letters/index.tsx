import React, { Props } from 'react'
import { Steps, Panel, Timeline, Button, IconButton, Icon, Divider } from 'rsuite';
//@ts-ignore
import style from './index.css'
import { useHistory, Switch, Route } from 'react-router';
import Footer from '../../../components/Footer';
import LetterList from './LetterList';
import Reader from './LetterReader';
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
    return <div className="h-100 d-flex flex-column">
        <div className="flex-grow-1">
            <div className={style.head}>
                <div className="container h-100 d-flex flex-column text-white" style={{ paddingTop: "20px" }}>
                    <div className="d-flex flex-grow-0">
                        <IconButton onClick={goBack} icon={<Icon icon="back-arrow" />} circle size="sm" />
                        <span className="d-flex flex-column justify-content-center" style={{ marginLeft: "12px", fontSize: "18px" }}>上一页</span>
                    </div>
                    <div className="d-flex text-center flex-column flex-grow-1 justify-content-end">
                        <h1>Love Letters</h1>
                        <br />
                        <h5>不经历风雨 怎能有传奇<br />
                            我会在这里等着你</h5>
                        <br />
                    </div>
                </div>
            </div>
            <div className="container" style={{ maxWidth: "600px" }}>
                <br />
                <LetterList />
            </div>
        </div>
        <Footer className="flex-grow-0" />
    </div>
}