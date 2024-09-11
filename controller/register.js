const repository=require('../repository/register')


const addUser=async (req,res)=>{
    const data=req.body;
    const addUser=await repository.addUser(data);
    res.status(addUser.statusCode).json({message:addUser.data})
 }

 const updateUser=async (req,res)=>{
    const data=req.body;
    const id=req.params.id
    const result=await repository.updateUser(data,id);
    res.status(200).json(result)
}

const deleteUser=async (req,res)=>{
    const id=req.params.id;
    const result=await repository.deleteUser(id);   
    res.status(result.statusCode).json(result.data)
}

module.exports={
    addUser,
    updateUser,
    deleteUser
}