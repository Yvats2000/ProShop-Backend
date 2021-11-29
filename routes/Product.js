const router = require('express').Router();
const {getProducts, getProduct, addproduct}=require('../controllers/getproducts')

router.get('/get-products',getProducts)
router.get('/get-product/:id', getProduct)

router.post('/add-product',addproduct)

module.exports=router;