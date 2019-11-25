import base from './webpack.config.base'
base.mode = "production";
//@ts-ignore
base.optimization.minimizer = [];
//@ts-ignore
base.optimization.splitChunks.cacheGroups.vendors = {
    name: "vendors",
    priority: -10,
    chunks: 'initial',
    test: /[\\/]node_modules[\\/]/
}
//@ts-ignore
base.optimization.splitChunks.chunks = "all"
export default base;