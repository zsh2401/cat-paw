export async function injectStyle(content: string) {
    await injectToHead(createElement("style", content));
}
export async function injectScript(content: string) {
    await injectToHead(createElement("script", content));
}
function createElement(tag: "script" | "style", innerHTML: string): HTMLElement {
    let element = document.createElement(tag);
    element.innerHTML = innerHTML;
    return element;
}
async function injectToHead(element: HTMLElement) {
    document.head.appendChild(element);
    return new Promise(resolve => {
        setTimeout(resolve, 0);
    });
}