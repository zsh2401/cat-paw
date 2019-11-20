import { fetchText } from "./fetcher";
import { injectScript, injectStyle } from "./injector";

export default async function (externalResourceUrl: string, type?: "script" | "style") {
    let raw = await fetchText(externalResourceUrl);

    if ((type && type === "script") || externalResourceUrl.endsWith(".js")) {
        await injectScript(raw);
    } else if ((type && type === "style") || externalResourceUrl.endsWith(".css")) {
        await injectStyle(raw);
    } else {
        throw "Can't load resource because there's no clearly defination of type for the resource>" + externalResourceUrl;
    }
} 