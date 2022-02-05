const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
    class Waitlist extends Model { };

    Waitlist.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        resume: {
            type: DataTypes.STRING,
            allowNull: false
        },
        screen: {
            type: DataTypes.BOOLEAN
        },
        animation: {
            type: DataTypes.BOOLEAN
        }
    }, {
        sequelize,
        freezeTableName: true,
        modelName: "Waitlist"
    });

    return Waitlist;
}