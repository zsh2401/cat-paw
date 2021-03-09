import "jquery"
import "bootstrap"
import "!!style-loader!css-loader?modules=false!rsuite/dist/styles/rsuite-default.min.css"
import "!!style-loader!css-loader?modules=false!bootstrap/dist/css/bootstrap.min.css"
import "!!style-loader!css-loader?modules=false!animate.css/animate.min.css"
import "!!style-loader!css-loader?modules=false!swiper/dist/css/swiper.min.css"
import "leancloud-storage"
import "./App.css"

import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Router'
import historyManager from '../common/history-manager';


export default async function () {
    await historyManager.init();
    ReactDOM.render(React.createElement(Router)
        , document.querySelector("#app"));
}