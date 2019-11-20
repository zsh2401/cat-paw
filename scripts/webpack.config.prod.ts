import base from './webpack.config.base'
base.mode = "production";
//@ts-ignore
base.devServer.port++;
//@ts-ignore
base.devServer.open = true;
export default base;