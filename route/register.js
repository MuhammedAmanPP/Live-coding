const express=require('express')
const route=express.Router()
const {addUser,updateUser,deleteUser}=require('../controller/register')

route.post('/',addUser)
route.put('/:id',updateUser)
route.delete('/:id',deleteUser)

module.exports=route