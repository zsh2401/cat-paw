import fs from 'fs'
export default{
    exists,
    readFile
}
export async function exists(filePath:string){
    return new Promise((resolve,reject)=>{
        fs.exists(filePath,(exist)=>{
            resolve(exist);
        })
    });
}
export async function readFile(filePath:string):Promise<Buffer>{
    return new Promise((resolve,reject)=>{
        fs.readFile(filePath,(err,data)=>{
            if(err)reject(err);
            else resolve(data);
        })
    })
}