const { Model } = require('sequelize');
/*
import nodeAdmin from '../../nodeAdmin'
import Movie from './MovieModel'
import PaymentModel from './PaymentModel'
import ServiceOrder from './ServiceOrderModel';
const sequelize = nodeAdmin.sequelize
const Payment = PaymentModel.Payment
class User extends Model {
    id;
    passwordHash;
    name;
    phone;
    role;
    email;
}

User.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    passwordHash: {
        type: new DataTypes.STRING(500),
        allowNull: false
    },
    name: {
        type: new DataTypes.STRING(100),
        allowNull: false
    },
    phone: {
        type: new DataTypes.STRING(100),
        allowNull: true
    },
    email: {
        type: new DataTypes.STRING(255),
        allowNull: false
    },
    role: {
        type: new DataTypes.STRING(100),
        allowNull: false
    }
}, {
    tableName: 'User',
    sequelize: sequelize,
    timestamps: false,
    defaultScope: {
        attributes: {
            exclude: ['passwordHash']
        }
    }
});

Payment.hasMany(Movie, { foreignKey: 'paymentsId' });
Payment.hasMany(ServiceOrder, { foreignKey: 'paymentsId' });
User.hasMany(Movie, { foreignKey: 'usersId' });
User.hasMany(ServiceOrder, { foreignKey: 'usersId' });
Movie.belongsTo(Payment, { foreignKey: 'paymentsId' });
ServiceOrder.belongsTo(Payment, { foreignKey: 'paymentsId' });
Movie.belongsTo(User, { foreignKey: 'usersId' });
ServiceOrder.belongsTo(User, { foreignKey: 'usersId' });

User.hasMany(Payment, { foreignKey: 'usersId' });
Payment.belongsTo(User, { foreignKey: 'usersId' });


export default User;
*/


module.exports = (sequelize, DataTypes) => {

    class User extends Model { };


    User.init({
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },
        password: {
            type: new DataTypes.STRING(500),
            allowNull: false
        },
        name: {
            type: new DataTypes.STRING(100),
            allowNull: false
        },
        phone: {
            type: new DataTypes.STRING(100),
            allowNull: true
        },
        email: {
            type: new DataTypes.STRING(255),
            allowNull: false
        },
        role: {
            type: new DataTypes.STRING(100),
            allowNull: false
        }
    }, {
        sequelize,
        freezeTableName: true,
        tableName: "User"
    });

    return User;

}
