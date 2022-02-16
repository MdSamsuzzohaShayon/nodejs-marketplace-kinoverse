const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
    class Partner extends Model {
        static associate(models) {
            // Partner.belongsTo(models.User);
        }
    }

    Partner.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        // first name, last name, business email, business website, description (text box)
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
        },
        businessEmail: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
        },
        // user: ONE TO ONE RELATIONSHIP 
    }, {
        sequelize,
        freezeTableName: true,
        modelName: "Partner"
    });



    return Partner;
}