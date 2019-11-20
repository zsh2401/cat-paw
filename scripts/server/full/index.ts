import express from 'express'
import path from 'path';
import connectHistoryApiFallback from 'connect-history-api-fallback';
import useSZRatIdentificator from '../handler/sz-rat-identificator'


const SZ_RAT_IDENTIFICATION = "/sz-rat-server";

export default function (ROOT_DIR:string,HOST:string,PORT:number) {
    const app = express();

    app.use(SZ_RAT_IDENTIFICATION, useSZRatIdentificator());
    app.use('/', connectHistoryApiFallback())
    app.use('/', express.static(ROOT_DIR));

    app.listen(PORT, HOST, () => {
        console.log(`[Browser History Sever] started at ${PORT}`);
    });
}
