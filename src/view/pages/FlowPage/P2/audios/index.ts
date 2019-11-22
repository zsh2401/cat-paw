export interface AudioInfo {
    title: string;
    coverSrc: string;
    description: string;
    src: string;
}
const audios: Array<AudioInfo> = [
    { title: "Komm,süsser Tod", coverSrc: require("./komm.jpg"), description: "\"I wish that I could turn back time\"", src: require("!!file-loader!./komm.mp3") },
    { title: "Light and Shadow", coverSrc: require("./las.jpg"), description: "\"How does it feel,got no one on your side?\"", src: require("!!file-loader!./las.mp3") },
];
export default audios;