import { History, createHashHistory, createBrowserHistory } from 'history'
let historyInstance:History<any>;
export async function init(){
    try{
        let responseText =  await (await fetch("/sz-rat-server")).text();
        if(responseText === "__SZRAT_SERVER__"){
            historyInstance = createBrowserHistory();
        }else{
            throw "response is not __SZRAT_SERVER__"
        }
    }catch(err){
        historyInstance = createHashHistory();
    }
   
}
function get(){
    if(!historyInstance)historyInstance = createHashHistory();
    return historyInstance;
}
export default {
    get,init
}