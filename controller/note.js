const repository=require('../repository/note')
const {verifyToken}=require('../util/jwtHelper')
const addNote=async (req,res)=>{
    const data=req.body;
    const token=req.headers.authorization;
    const userId=await verifyToken(token);
    data.userId=userId.userId
    const addNote=await repository.addNote(data);
    res.status(200).json(addNote)
}

const updateNote=async (req,res)=>{
   const data=req.body;
   const token=req.headers.authorization;
   const userId=await verifyToken(token);
   const result=await repository.updateNote(data,userId.userId)
   res.status(200).json(result)
}

const deleteNote=async (req,res)=>{
    const token=req.headers.authorization;
    const userId=await verifyToken(token);
    console.log(userId,'i am from user id');
    
    const result=await repository.deleteNote(userId.userId);
    res.status(200).json(result)
}

module.exports={
    addNote,
    updateNote,
    deleteNote
}