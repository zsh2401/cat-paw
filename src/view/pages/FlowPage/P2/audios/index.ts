export interface AudioInfo {
    title: string;
    coverSrc: string;
    description: string;
    src: string;
    volume?:number;
}
const audios: Array<AudioInfo> = [
    { title: "Day one", volume:0.5, coverSrc: require("./day_one.jpg"), description: "星际穿越,对我们有特殊的意义", src: require("./day_one.mp3") },
    { title: "Komm,süsser Tod", coverSrc: require("./komm.jpg"), description: "\"I wish that I could turn back time\"", src: require("./komm.mp3") },
    { title: "Light and Shadow",volume:0.4,  coverSrc: require("./las.jpg"), description: "\"How does it feel,got no one on your side?\"", src: require("./las.mp3") },
];
export default audios;