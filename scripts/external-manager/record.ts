import IRecord from './IRecord'
const record: IRecord = {
    "bootstrap_css": { contentURL: "https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" },
    "jquery": { contentURL: "https://cdn.jsdelivr.net/npm/jquery@3.4.1/dist/jquery.min.js" },
    "bootstrap": { contentURL: "https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js" },


    "react": { alias: "React", contentURL: "https://cdn.jsdelivr.net/npm/react@16.11.0/umd/react.production.min.js" },
    "react-dom": { alias: "ReactDOM", contentURL: "https://cdn.jsdelivr.net/npm/react-dom@16.11.0/umd/react-dom.production.min.js" },
    // "react-router-dom":{alias:"ReactRouterDOM",contentURL:"https://cdn.jsdelivr.net/npm/react-router-dom@5.1.2/umd/react-router-dom.min.js"},

    // "antd_css":{contentURL:"https://cdn.jsdelivr.net/npm/antd@3.25.2/dist/antd.min.css"},
    // "antd":{alias:"antd",contentURL:"https://cdn.jsdelivr.net/npm/antd@3.25.2/dist/antd.min.js"},

    "rsuite_css": { contentURL: "https://cdn.jsdelivr.net/npm/rsuite@4.1.1/dist/styles/rsuite-default.min.css" },
    "rsuite": { alias: "rsuite", contentURL: "https://cdn.jsdelivr.net/npm/rsuite@4.1.1/dist/rsuite.min.js" },

    "animate.css": { contentURL: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css" },
    "lodash": { alias: "_", contentURL: "https://cdn.jsdelivr.net/npm/lodash@4.17.15/lodash.min.js" },


    "swiper_css": { contentURL: "https://unpkg.com/swiper/css/swiper.min.css" },
    "swiper": { alias: "Swiper", contentURL: "https://unpkg.com/swiper/js/swiper.min.js" },

    "leancloud-storage": { alias: "AV", contentURL: "https://cdn.jsdelivr.net/npm/leancloud-storage@4.0.0/dist/av-min.js" },
    "valine": { alias: "Valine", contentURL: "https://cdn.jsdelivr.net/npm/valine@1.3.10/dist/Valine.min.js" }

}
export default record;