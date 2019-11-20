import IRecord from './IRecord'
// const list:IExternalLib[] = [
//     {importName:"jquery",alias:"$",externalUrl:"https://cdn.jsdelivr.net/npm/jquery@3.4.1/dist/jquery.min.js"},
//     {importName:"bootstrap",alias:"bootstrap",externalUrl:"https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js"},
//     {importName:"bootstrap_css",alias:"bootstrap_css",externalUrl:"https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"},


//     {importName:"react",alias:"React",externalUrl:"https://cdn.jsdelivr.net/npm/react@16.12.0/umd/react.production.min.js"},
//     {importName:"react-dom",alias:"ReactDOM",externalUrl:"https://cdn.jsdelivr.net/npm/react-dom@16.12.0/umd/react-dom.production.min.js"},
//     {importName:"react-router-dom",alias:"ReactRouterDOM",externalUrl:"https://cdn.jsdelivr.net/npm/react-router-dom@5.1.2/umd/react-router-dom.min.js"},
//     {importName:"react-use",alias:"react-use",externalUrl:"https://cdn.jsdelivr.net/npm/react-use@13.8.0/lib/index.min.js"},

//     {importName:"lodash",alias:"_",externalUrl:"https://cdn.jsdelivr.net/npm/lodash@4.17.15/lodash.min.js"},
// ]
const record:IRecord = {
    "bootstrap_css":{contentURL:"https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"},
    "jquery":{contentURL:"https://cdn.jsdelivr.net/npm/jquery@3.4.1/dist/jquery.min.js"},
    "bootstrap":{contentURL:"https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js"},

    "react":{alias:"React",contentURL:"https://cdn.jsdelivr.net/npm/react@16.11.0/umd/react.production.min.js"},
    "react-dom":{alias:"ReactDOM",contentURL:"https://cdn.jsdelivr.net/npm/react-dom@16.11.0/umd/react-dom.production.min.js"},
    // "react-router-dom":{alias:"ReactRouterDOM",contentURL:"https://cdn.jsdelivr.net/npm/react-router-dom@5.1.2/umd/react-router-dom.min.js"},

    "lodash":{alias:"_",contentURL:"https://cdn.jsdelivr.net/npm/lodash@4.17.15/lodash.min.js"}
}
export default record;