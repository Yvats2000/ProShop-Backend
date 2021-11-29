const { DataTypes, Sequelize, Model } = require('sequelize');

function model(sequelize) {
    const attributes = {
        _id:{ type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        name:{type:DataTypes.STRING},
        image:{type:DataTypes.TEXT},
        description:{type:DataTypes.STRING},
        brand:{type:DataTypes.STRING},
        category:{type:DataTypes.STRING},
        price:{type:DataTypes.INTEGER},
        bracountInStock:{type:DataTypes.INTEGER},
        rating:{type:DataTypes.INTEGER},
        numReviews:{type:DataTypes.INTEGER},

    }
    return sequelize.define('Product',attributes,{ timestamps: false });

}

module.exports = model

