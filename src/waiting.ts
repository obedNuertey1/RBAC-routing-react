function waiting(ms:number){
    return new Promise((res)=>{
        setTimeout(res, ms);
    })
}

export default waiting;