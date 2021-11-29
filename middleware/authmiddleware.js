const jwt = require('jsonwebtoken');
// const env = require('./env')
const asyncHandler = require('express-async-handler')
// const User = require('../models/user')
const db = require('../db/db.js');


const protect = asyncHandler(async (req, res, next) => {
    // console.log(req.user)
    let token;
    console.log('hi',"==>")
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')
    ) {
        try {
            token = req.headers.authorization.split(' ')[1]
            // console.log(token,'dwd')
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            const Id = decoded.id
            console.log(Id)
            req.user = await db.User.findOne({where: {_id : Id}})
            next()
        } catch (error) {
            console.log(error)
        }
    }
    else{ 
        res.status(401)
        throw new Error('Not authorised, no token')
    }
    next();
})

module.exports = {
    protect
}