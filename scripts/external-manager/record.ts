import IRecord from './IRecord'
console.info("build fro android?" + process.env.BUILD4ANDROID)

const record: IRecord = {
    "bootstrap_css": { contentURL: "https://cdn.bootcss.com/twitter-bootstrap/4.3.1/css/bootstrap.min.css" },
    "jquery": { contentURL: "https://cdn.bootcss.com/jquery/3.4.1/jquery.min.js" },
    "bootstrap": { contentURL: "https://cdn.bootcss.com/twitter-bootstrap/4.3.1/js/bootstrap.min.js" },


    "react": { alias: "React", contentURL: "https://cdn.jsdelivr.net/npm/react@16.11.0/umd/react.production.min.js" },
    "react-dom": { alias: "ReactDOM", contentURL: "https://cdn.jsdelivr.net/npm/react-dom@16.11.0/umd/react-dom.production.min.js" },

    "rsuite_css": { contentURL: "https://cdn.jsdelivr.net/npm/rsuite@4.1.1/dist/styles/rsuite-default.min.css" },
    "rsuite": { alias: "rsuite", contentURL: "https://cdn.jsdelivr.net/npm/rsuite@4.1.1/dist/rsuite.min.js" },

    "animate.css": { contentURL: "https://cdn.bootcss.com/animate.css/3.7.2/animate.css" },

    "lodash": { alias: "_", contentURL: "https://cdn.bootcss.com/lodash.js/4.17.15/lodash.min.js" },


    "swiper_css": { contentURL: "https://cdn.jsdelivr.net/npm/swiper@5.2.1/css/swiper.min.css" },
    "swiper": { alias: "Swiper", contentURL: "https://cdn.jsdelivr.net/npm/swiper@5.2.1/js/swiper.min.js" },

    "leancloud-storage": { alias: "AV", contentURL: "https://cdn.jsdelivr.net/npm/leancloud-storage@4.0.0/dist/av-min.js" },
    "valine": { alias: "Valine", contentURL: "https://cdn.jsdelivr.net/npm/valine@1.3.10/dist/Valine.min.js" }

}
export default process.env.BUILD4ANDROID ? [] : record;