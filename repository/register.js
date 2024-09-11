const { where } = require('sequelize');
const user=require('../model/register');

const addUser=(data)=>{
    return new Promise((resolve,reject)=>{
        user.create(data).then((result)=>{
         resolve({data:result,statusCode:200})
        },(err)=>{
         resolve({data:err.message,statusCode:401})
        })       
     })   
 }
 
 const updateUser=(data,id)=>{
   return new Promise((resolve,reject)=>{
     user.update(data,{where:{id:id}}).then((result)=>{
       resolve(result)
     },(err)=>{
       reject(err)
     })
   })
 }
 
 const deleteUser=(id)=>{
   return new Promise((resolve,reject)=>{
     user.update({delete:true},{where:{id:id}}).then((result)=>{
       resolve({data:`succesfully deleted user in this id ${id}`,statusCode:200})
     },(err)=>{
       reject(err)
     })
   })
 }


 module.exports={addUser,updateUser,deleteUser}