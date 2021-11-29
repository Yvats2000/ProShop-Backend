// const products = require('../data/products')
const db = require('../db/db.js');



async function getProducts(req, res)  {
    try{
        const Product = await db.Products.findAll({
            // attributes:['_id']
        })
        // console.log(Product)
        res.status(200).json({"status":true,"products":Product,"message" : "api works"})
    } catch(error) {
        console.log(error)
        res.status(500).json({status:false})
    }
}

async function getProduct(req, res)  {
    try{
        // console.log(req.params);
        const {id}=req.params
        const pro = await db.Products.findOne({where:{_id:parseInt(id)}})
        // let product =products.find((data)=>data._id==req.params.id)
        // console.log(product)
        if(pro){
            res.status(200).json({"status":true,"product":pro, "message" : "api works"})
        }else{
            res.status(200).json({"status":false, "message" : "product not available"})
        }
       
    } catch(error) {
        console.log(error)
        res.status(500).json({status:false})
    }
}

async function addproduct(req, res)  {
    try{
       const {productInfo,id}=req.body;
    //    console.log(productInfo)
       if(id){
           await db.Products.update(productInfo,{where:{_id:id}})
            res.status(200).json({"status":true,"message":"product created"})
       }else{
           console.log(productInfo,"===>")
        const create=await db.Products.create(productInfo);
        if(create){
            res.status(200).json({"status":true, "product":create ,"message":"product created"})
        }
       }
    } catch(error) {
        
    }
}


module.exports={
    getProducts,getProduct, addproduct
}