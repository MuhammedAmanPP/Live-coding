const note=require('../model/note');

const addNote=async (data)=>{
console.log(data,'i am form data');

    //  console.log(userId.userId);
    return new Promise((resolve,reject)=>{
        note.create(data).then((data)=>{
         resolve({data:data,statusCode:200})
        },(err)=>{
         reject({data:err.message,statusCode:401})
        })       
     })   
     
}

const updateNote=async (data,id)=>{
    return new Promise((resolve,reject)=>{
        note.update(data,{where:{userId:id}}).then((result)=>{
          resolve(result)
        },(err)=>{
          reject(err)
        })
      })
}

const deleteNote=(id)=>{
    return new Promise((resolve,reject)=>{
        note.destroy({delete:true},{where:{userId:id}}).then((result)=>{
          resolve({data:`succesfully deleted user in this id ${id}`,statusCode:200})
        },(err)=>{
          reject(err)
        })
      })
}

module.exports={
    addNote,
    updateNote,
    deleteNote
}