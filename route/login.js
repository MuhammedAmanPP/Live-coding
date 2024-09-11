const express=require('express');
const route=express.Router();
const {loginUser}=require('../controller/login')

route.post('/',loginUser)

module.exports=route