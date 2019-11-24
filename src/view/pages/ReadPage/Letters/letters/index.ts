export interface Letter {
    id:number;
    imgSrc: string;
    title: string;
    description: string;
    time:string;
}
const letters: Array<Letter> = [
    {id:1,imgSrc:require("!!file-loader?name=/letter_img/[name].[ext]&limit=1!./1.png"),title:"回顾过去",description:"啊啊啊啊啊",time:"Aug 12,2019"},
    {id:2,imgSrc:require("!!file-loader?name=/letter_img/[name].[ext]&limit=1!./2.jpg"),title:"承诺的保质期",description:"啊啊啊啊啊",time:"Oct 12,2019"},
    {id:3,imgSrc:require("!!file-loader?name=/letter_img/[name].[ext]&limit=1!./3.png"),title:"我想你,每一刻",description:"啊啊啊啊啊",time:"Oct 21,2019"},
    {id:4,imgSrc:require("!!file-loader?name=/letter_img/[name].[ext]&limit=1!./4.png"),title:"一些倾诉",description:"啊啊啊啊啊",time:"Oct 27,2019"},
];
export default letters;


