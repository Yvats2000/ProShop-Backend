const db = require('../db/db.js');
const{ generateToken}= require('./utlis/generateToken');
const {encryptPass,checkUser}=require('../helpers/Crypto');


// encrypt random
// decript solving
// signIn 
async function authUser(req, res)  {
     const data = req.body;
     let pass=await encryptPass(data.password)
      console.log(pass)
      let user={
         "name": data.name,
         "email": data.email,
         "password": await encryptPass(data.password)
      }
const userdata=await db.User.findOne({where:{email:user.email}})
if(!userdata){
   const data = await db.User.create(user)
   res.status(200).json({"status":true,"products":data,"message" : "api works"})
}else{
   res.status(200).json({"status":false,"message" : "user already exist"})
}
  
}


async function login(req, res) {
   try {
      const data = req.body;
      const users = await db.User.findOne({where:{"email":data.email}});
      // console.log(users)
      if(!users){
         res.status(200).json({"status":false,"message":"user not found"})
      }else{
         let password=users.password;
         let compare=await checkUser(data.password,password);
         if(users&& compare){
            res.status(200).json({"status":true,user : users.name,
                                                _id : users._id ,           
                                                email : users.email, 
                                                password: users.password,
                                                token : generateToken( users._id )})
         }else{
            res.status(200).json({"status":false,"message":"password incorrect"})
         }
      }
   } catch (error) {
      console.log(error)
   }
}

// get user profile (Protected route)

async function getuserProfile(req, res) {
   // res.status(200).json({'message':"api works"})
   let userId=res.locals['userId']
   console.log(userId,'==')
   const users = await db.User.findOne({where:{"_id":userId}})
   res.status(200).json({"status":true,user:users.name,
                                       email:users.email,
                                       admin:users.admin})
}
module.exports= { authUser, login, getuserProfile}