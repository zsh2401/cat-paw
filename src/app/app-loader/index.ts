// console.log("wtf");
import OfflinePluginRuntime from 'offline-plugin/runtime'
import * as topPace from '../../common/view-helper/top-pace'
import externalLoader from '../../common/external-loader';
class AppLoader {
    public async run() {
        await topPace.init(document.querySelector("#__global-pace") as HTMLDivElement);
        await this.installSWIfNeed();
        await this.loadLib();
        if(thereIsHomePage() && process.env.NODE_ENV === "production"){
            await wait(1937);
        }
        await this.loadApp();
    }
    // @percentSpan(5, 10)
    private async installSWIfNeed() {
        if (process.env.NODE_ENV === "production") {
            OfflinePluginRuntime.install();
        }
    }
    // @percentSpan(20, 80)
    private async loadLib() {
        //@ts-ignore
        const contents: string[] = ___CONTENT_URLS;
        const percentSpan = [20, 80];
        const everyStepPercent = parseInt(((percentSpan[1] - percentSpan[0]) * 1.0 * (1.0 / contents.length)).toFixed(0));
        for (let i = 0; i < contents.length; i++) {
            let crt = contents[i];
            await externalLoader(crt);
            // this.percent = this.percent + everyStepPercent;
        }
    }
    // @percentSpan(null, 100)
    private async loadApp() {
        try{
            await import(/*webpackChunkName:"app"*/"../App")
        }catch(err){
            console.error(err);
        }
    }
    private get percent() {
        return topPace.percentGetter();
    }
    private async setPercentAsync(value:number){
        topPace.percentSetterAnimated(value);
    }
    private set percent(value: number) {
        topPace.percentSetterAnimated(value);
    }
}
new AppLoader().run();

function percentSpan(startPercent: number | null, finishedPercent: number) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const raw = descriptor.value;
        descriptor.value = async (...args: any[]) => {
            if (startPercent) {
                target.percent = startPercent;
            }
            let ret:any;
            try{
                ret = await raw.apply(target, args);
            }catch(err){
                throw err;
            }
            await target.setPercentAsync(finishedPercent);
            return ret;
        }
    }
}

function thereIsHomePage(): boolean {
    return /#[\/]?$/.test(window.location.hash);
}
async function wait(ms: number = 1500) {
    await new Promise(resolve => setTimeout(resolve, ms));
}
