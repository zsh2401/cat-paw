export async function fetchText(url:string):Promise<string>{
    return await (await fetch(url)).text();
}