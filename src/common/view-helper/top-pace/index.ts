/**Do not use React 
 * Pure JavaScript implenmented
*/
let wrapperElement:HTMLDivElement;
let innerElement:HTMLDivElement;
export async function init(element:HTMLDivElement){
    wrapperElement = element;
    innerElement = document.createElement("div");
    wrapperElement.appendChild(innerElement);

    wrapperElement.style.position = "fixed";
    wrapperElement.classList.add("__global-pace-wrapper");
    wrapperElement.style.width = "100%";
    wrapperElement.style.height = "2px";
    wrapperElement.style.backgroundColor = "whitesmoke";

    innerElement.className="__global-pace-inner"
    innerElement.style.backgroundImage = "linear-gradient( 135deg, #2AFADF 10%, #4C83FF 100%)";
    innerElement.style.width = "0%";
    innerElement.style.height = "100%"

    await new Promise(resolve=>setTimeout(resolve,0));
}
export function percentAdder(addValue:number){
    return percentSetter(percentGetter() + addValue);
}
export function percentGetter(){
    let widthString = innerElement.style.width;
    return +widthString.slice(0,widthString.length-1);
}
export function percentSetter(value:number){
    display();
    if(value >= 100 || value < 0){
        hide();
        return;
    }
    innerElement.style.width = value + "%";
    return percentGetter();
}
export function hide(){
    percentSetter(0);
    wrapperElement.style.visibility = "hidden";
}
export function display(){
    wrapperElement.style.visibility = "visible";
}
export async function percentSetterAnimated(value:number){
    return new Promise((resolve)=>{
        requestAnimationFrame(()=>nextFrame(percentGetter(),value,resolve));
    });
}
function nextFrame(crt:number,target:number,endCallback:()=>void){
    if(crt > target){
        crt--;
    }else if(crt < target){
        crt++;
    }else{
        endCallback();
        return;
    }
    percentSetter(crt);
    requestAnimationFrame(()=>nextFrame(crt,target,endCallback));
}