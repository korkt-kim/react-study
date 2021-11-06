export const myAPI = () =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(200);
        },2000)
        
    });
}