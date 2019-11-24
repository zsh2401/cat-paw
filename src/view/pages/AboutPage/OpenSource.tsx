import React from 'react'
import { List } from 'rsuite'
export default function OpenSource() {
    return <div>
        <br />
        <p className="font-italic text-center">Yin's Cat Paw的开发离不开以下开源项目</p>
        <br/>

        <List bordered className="mr-auto ml-auto" style={{ maxWidth: "400px" }}>
            <List.Item><OSProject name="webpack/webpack" desc="A bundler for javascript and friends." url="https://webpack.js.org/" license="MIT" /></List.Item>
            <List.Item><OSProject name="facebook/react" desc="A declarative, efficient, and flexible JavaScript library for building user interfaces." url="https://reactjs.org/" license="MIT" /></List.Item>
            <List.Item><OSProject name="ReactTraining/react-router" desc="Declarative routing for React" url="https://reacttraining.com/react-router/" license="MIT" /></List.Item>
            <List.Item><OSProject name="microsoft/TypeScript" desc="TypeScript is a superset of JavaScript that compiles to clean JavaScript output. " url="https://www.typescriptlang.org/" license="Apache-2.0" /></List.Item>
            <List.Item><OSProject name="microsoft/vscode" desc="Visual Studio Code" url="https://code.visualstudio.com/" license="MIT" /></List.Item>
            <List.Item><OSProject name="twbs/bootstrap" desc="The most popular HTML, CSS, and JavaScript framework for developing responsive, mobile first projects on the web." url="https://getbootstrap.com/" license="MIT" /></List.Item>
            <List.Item><OSProject name="lodash/lodash" desc="A modern JavaScript utility library delivering modularity, performance, and extras." url="https://lodash.com/" license="MIT" /></List.Item>
            <List.Item><OSProject name="nolimits4web/swiper" desc="Most modern mobile touch slider with hardware accelerated transitions" url="https://swiperjs.com/" license="MIT" /></List.Item>
        </List>
        <br/><br/>
    </div>
}

interface OSProjectProps {
    name: string;
    desc: string;
    url: string;
    license: string;
}
function OSProject(props: OSProjectProps) {
    return <div>
        <a href={props.url} target="_blank">{props.name}</a><br/>
        [{props.license} licensed] <br />
        {props.desc}<br />
    </div>
}