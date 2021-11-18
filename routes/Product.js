const router = require('express').Router();
const {getProducts, getProduct}=require('../controllers/getproducts')

router.get('/get-products',getProducts)
router.get('/get-product/:id', getProduct)

module.exports=router;