const { where } = require('sequelize')
const user=require('../model/register')

const getLoginUserDetails=(email)=>{
  return new Promise((resolve,reject)=>{
    user.findOne({where:{email:email}}).then((data)=>{
       resolve(data)
    },err=> reject(err))
  })
}
module.exports={getLoginUserDetails}