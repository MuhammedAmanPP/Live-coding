const jwt=require('jsonwebtoken')
const secret='secret@321'

const createToken=async (id)=>{
    const token=await jwt.sign({userId:id},secret);
    return token;
}

const verifyToken=async (token)=>{
    return new Promise((resolve,reject)=>{
        jwt.verify(token,secret,(err,decode)=>{            
            if (err) reject(err)
                resolve(decode)
        })
    }) 
}
module.exports={createToken,verifyToken}