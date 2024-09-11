const express=require('express');
require('dotenv').config({path:'./config/config.env'})
const port=process.env.PORT
const register=require('./route/register')
const login=require('./route/login')
const note=require('./route/note')

const app=express();
app.use(express.json())
app.use('/api/register',register)
app.use('/api/login',login)
app.use('/api/note',note)
app.listen(port,()=>{
    console.log('server runnig',port);
    
})
