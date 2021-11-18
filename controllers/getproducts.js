const products = require('../data/products')

async function getProducts(req, res)  {
    try{
        res.status(200).json({"status":true,"products":products,"message" : "api works"})
    } catch(error) {
        console.log(error)
        res.status(500).json({status:false})
    }
}

async function getProduct(req, res)  {
    try{
        console.log(req.params);
        let product =products.find((data)=>data._id==req.params.id)
        console.log(product)
        res.status(200).json({"status":true,"product":product, "message" : "api works"})
    } catch(error) {
        console.log(error)
        res.status(500).json({status:false})
    }
}


module.exports={
    getProducts,getProduct
}