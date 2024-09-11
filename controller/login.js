const repository=require('../repository/login')
const {createToken}=require('../util/jwtHelper')
const loginUser=async (req,res)=>{
    const {email,password}=req.body;
    const userDetials=await repository.getLoginUserDetails(email);
    if(userDetials==null){
       return res.status(501).json('email or password incorrect')
    }
    if(email==userDetials.email&&password==userDetials.password){
        const token=await createToken(userDetials.id)
       res.status(200).json({message:'login succesfully complited',token:token})
    }else{
       res.status(501).json('email or password incorrect')
    }
      
 }
 
 module.exports={loginUser}