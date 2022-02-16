const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
    class Contest extends Model {
        static associate(models) {
            // Contest.belongsTo(models.User);
        }
    }

    Contest.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        screenplay: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // user: ONE TO ONE RELATIONSHIP 
    }, {
        sequelize,
        freezeTableName: true,
        modelName: "Contest"
    });



    return Contest;
}