const db = require('../db/db.js');
const{ generateToken}= require('./utlis/generateToken');
const {encryptPass,checkUser}=require('../helpers/Crypto');


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
   const Product = await db.User.create(user)
   // const Product = await db.User.find({"email":data.email})
   // if(Product) {

   // }

   res.status(200).json({"status":true,"products":Product,"message" : "api works"})
}


async function login(req, res) {
   try {
      const data = req.body;
      const users = await db.User.findOne({where:{"email":data.email}});
      console.log(users)
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
   const users = await db.User.findOne(req.user._id)
   if(users) {
      res.json({user : users.name,
         _id : users._id ,           
         email : users.email,
         password: users.password})
   } else {
      console.log(error)
}
}
module.exports= { authUser, login, getuserProfile}