require('dotenv').config();

const express = require('express');
// const cors = require('cors');
const bodyParser = require('body-parser');


const app = express();
// require('./connection/db.js');
app.use(bodyParser.urlencoded({ limit: '50mb', extended: false }));
app.use(bodyParser.json({ limit: '50mb' }));
// app.use(cors());
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'X-Requested-With')
    res.header('Access-Control-Allow-Headers', 'Content-Type')
    next();
});

const port = process.env.PORT || 3000;
const productRoute=require('./routes/Product');
const baseURL=process.env.baseURL
app.use(baseURL,productRoute);

app.get(baseURL, (req, res) => {
    res.send("welcome to escrowmoney")
})
app.listen(port, () => {
    console.log(`Server is running on port ${port}.`)
})


