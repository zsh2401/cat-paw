export default interface IRecord{
    [key:string]:ILibInfomation;
}
export interface ILibInfomation{
    alias?:string;
    contentURL:string;
    contentURLDebug?:string;
}