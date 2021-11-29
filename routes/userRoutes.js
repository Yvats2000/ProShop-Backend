const router = require('express').Router();
// const {getProducts, getProduct, addproduct}=require('../controllers/getproducts')
const { authUser, login, getuserProfile } =require('../controllers/userController')
const {protect} = require('../middleware/authmiddleware')

router.post('/signIn', authUser)
router.post('/login', login)
router.get('/profile',protect, getuserProfile)


module.exports=router;