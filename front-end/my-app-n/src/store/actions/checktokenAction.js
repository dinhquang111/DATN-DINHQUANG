

export function checkToken(){
    return{
        type: "CHECK_TOKEN",
        token: new Promise((resolve,reject)=>{
            let check = localStorage.getItem("token");
            console.log(check)
            resolve(check);
        })
    }
}