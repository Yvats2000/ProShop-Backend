require('dotenv').config();
const path = require('path')

const express = require('express');
// const cors = require('cors');
const bodyParser = require('body-parser');


const app = express();
require('./db/db.js');

// Headers 
app.use(bodyParser.urlencoded({ limit: '50mb', extended: false }));
app.use(bodyParser.json({ limit: '50mb' }));
// app.use(cors());
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'X-Requested-With')
    res.header('Access-Control-Allow-Headers', 'Content-Type')
    next();
});
//Headers


const dirname = path.resolve()
app.use('/uploads', express.static(path.join(dirname, '/uploads')))

const port = process.env.PORT || 3000;
const productRoute=require('./routes/Product');
const userRoute=require('./routes/userRoutes');
const baseURL=process.env.baseURL
app.use(baseURL,productRoute);
app.use(baseURL,userRoute);


app.get(baseURL, (req, res) => {
    res.send("welcome to escrowmoney")
})
app.listen(port, () => {
    console.log(`Server is running on port ${port}.`)
})


