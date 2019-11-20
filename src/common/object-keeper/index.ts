export default {
    put,
    get,
    exists,
    auto,
    VERSION:"0.6",
    NAME:"object-keeper"
}
const CONTAINER_NAME = "_OJB_KPER";
export type Key = string;

(()=>{
    if(!(window as any)[CONTAINER_NAME]){
        initContainer();
    }
})();

function auto<TResult = any>(key:Key,factory:()=>TResult):TResult{
    let v = get(key);
    if((!v) && factory){
        v = factory();
        put(key,v);
        return v;
    }else{
        return v;
    }
}
function exists(key:Key):boolean{
    let v = get(key);
    return v ? true : false;
}
function put(key:Key,value:any){
    getContainer().set(key,value);
}
function get<TResult = any>(key:Key):TResult{
    return getContainer().get(key) as TResult;
}
function initContainer(){
    (window as any)[CONTAINER_NAME] = new Map<Key,any>();
}
function getContainer():Map<Key,any>{
    return (window as any)[CONTAINER_NAME] as Map<Key,any>;
}