const jwt = require('jsonwebtoken');
// const env = require('./env')
const asyncHandler = require('express-async-handler')
// const User = require('../models/user')
const db = require('../db/db.js');


const protect = asyncHandler(async (req, res, next) => {
  try{
      if(!req.headers&& req.headers.authorization){
          res.status(401).json({"status":true,"message":"Missing Autherization credentials"})
      }else{
          let authorization=req.headers.authorization.split(' ')[1]
          console.log(authorization)
          const decoded = jwt.verify(authorization, process.env.JWT_SECRET)
            console.log(decoded)
            if(!decoded){
                throw new Error('Not authorised')
            }else{
                res.locals['userId']=decoded.id
                next();
            }
         
      }
  }catch(error){
      if(error){
          res.status(500).json({"status":false,"message":error.message})
      }
  }
})

module.exports = {
    protect
}