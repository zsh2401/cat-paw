export interface Letter {
    id:number;
    imgSrc: string;
    title: string;
    description: string;
    time:string;
}
const letters: Array<Letter> = [
    {id:1,imgSrc:require("./1.png"),title:"回顾过去",description:"我总是说:\"I wish that I could turn back time\"",time:"Aug 12,2019"},
    {id:2,imgSrc:require("./2.jpg"),title:"承诺的保质期",description:"每一个现在",time:"Oct 12,2019"},
    {id:3,imgSrc:require("./3.png"),title:"我想你,每一刻",description:"\"I love you,I miss you\"",time:"Oct 21,2019"},
    {id:4,imgSrc:require("./4.png"),title:"一些倾诉",description:"滑滑太矫情了!要改!",time:"Oct 27,2019"},
];
export default letters;


