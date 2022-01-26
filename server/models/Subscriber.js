const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {


    class Subscriber extends Model {
        id;
        name;
        email;
        resume;

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
        name: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        waitlist: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        resume: {
            type: DataTypes.STRING
        }
    }, {
        // Other model options go here
        sequelize, // We need to pass the connection instance
        freezeTableName: true,
        modelName: 'Subscriber' // We need to choose the model name
    });

    return Subscriber;


}