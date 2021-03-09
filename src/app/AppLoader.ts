
import nProgress from "nprogress"
import OfflinePlugin from "offline-plugin/runtime"
import "!!style-loader!css-loader?modules=false!nprogress/nprogress.css"
(async () => {
    nProgress.start();
    const app = await import("./App");
    await app.default();
    nProgress.done();
    OfflinePlugin.install();
})();
