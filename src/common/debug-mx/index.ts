/**
 * Provides some useful debug information
 * 
 */
import packageInfo from "../../../package.json";

const DEV_STR = "development"
const PROD_STR = "production"
function isDev(): boolean {
    return process.env.NODE_ENV !== PROD_STR;
}
export function getRawPkgInfo(): any {
    return packageInfo;
}
export default {
    IS_DEV: isDev(),
    VERSION: packageInfo.version,
    NAME: packageInfo.name,
    DESC: packageInfo.description,
    AUTHOR: packageInfo.author,
    SZ_RAT_VERSION: packageInfo.sz_rat.version,
    SZ_RAT_VNAME: packageInfo.sz_rat.vname,
    SZ_RAT_DESC: packageInfo.sz_rat.description,
    SZ_RAT_REPO: packageInfo.sz_rat.repo,
    SZ_RAT_AUTHOR: "zsh2401",
}
