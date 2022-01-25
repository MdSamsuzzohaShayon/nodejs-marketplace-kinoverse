const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {


    class Subscriber extends Model {
        id;
        email;
        static associate(models) {
            // define association here
            // Subscriber.hasOne()
        }
    };

    Subscriber.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }
    }, {
        // Other model options go here
        sequelize, // We need to pass the connection instance
        freezeTableName: true,
        modelName: 'subscribers' // We need to choose the model name
    });

    return Subscriber;


}