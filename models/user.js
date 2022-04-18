const { DataTypes, Sequelize, Model } = require('sequelize');

function model(sequelize) {
    const attributes = {
        _id:{ type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        name:{type:DataTypes.STRING},
        email:{type:DataTypes.STRING},
        password:{type:DataTypes.TEXT
        },
        admin:{type:DataTypes.BOOLEAN, defaultValue:false},
        createdBy:{type:DataTypes.INTEGER},

    }
    return sequelize.define('user',attributes,{ timestamps: false });

}

module.exports = model

