const express=require('express');
const route=express.Router();
const {addNote,updateNote,deleteNote}=require('../controller/note')

route.post('/',addNote)
route.put('/',updateNote)
route.delete('/',deleteNote)

module.exports=route