const mysql = require('mysql2/promise');
const { Sequelize } = require('sequelize');
module.exports = db = {};
module.exports.initialize = initialize;
initialize();


async function initialize() {
    // create db if it doesn't already exist
    try {
        const sequelize = new Sequelize('ecommerce', 'root', 'root', {
            port: "3306",
            host: 'localhost',
            dialect: 'mysql',
            logging: false
        });


        db.Products = require('../models/Product')(sequelize);
        db.User = require('../models/user')(sequelize);
        db.EscrowAgreement = require('../models/escroAgreement')(sequelize);
        db.PropertyInfo = require('../models/escrowPropertyInfo')(sequelize);


        db.User.hasMany(db.Products, {  foreignKey: 'createdBy' })

        await sequelize.sync();
    } catch (error) {
        console.log(error)
    }
}