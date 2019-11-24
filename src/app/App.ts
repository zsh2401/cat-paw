// import "jquery"
// import "bootstrap"
// import "!!style-loader!css-loader?modules=false!bootstrap/dist/css/bootstrap.min.css"
import "./App.css"

import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Router'
import historyManager from '../common/history-manager';


(async () => {
    await historyManager.init();
    ReactDOM.render(React.createElement(Router)
        , document.querySelector("#app"));
})()
