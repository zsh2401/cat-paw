import webpack from 'webpack'
import record from './record'
export default {
    externals: getExternals(),
    urls: getURLS(),
}
function getExternals(): webpack.ExternalsElement {
    let result:webpack.ExternalsElement = {};
    for (let key in record) {
        result[key] = record[key].alias || key;
    }
    return result;
}
function getURLS(): string[] {
    const IS_DEV = process.env.NODE_ENV === "development";
    let result:string[] = [];
    for (let key in record) {
        let crt = record[key];
        if (IS_DEV) {
            result.push(crt.contentURLDebug || crt.contentURL)
        }else{
            result.push(crt.contentURL);
        }
    }
    return result;
}
