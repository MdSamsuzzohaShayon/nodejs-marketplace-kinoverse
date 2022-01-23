import { Model, DataTypes } from 'sequelize';
import nodeAdmin from '../../nodeAdmin'
import ServiceOrder from './ServiceOrderModel';
//import Service from './ServiceModel';
import ServicePayment from './ServicePaymentModel';

const sequelize = nodeAdmin.sequelize
class Service extends Model {
    public id!: number;
    public passwordHash!: string;
    public name!: string;
    public phone!: string;
    public role!: string;
    public email!: string;
}
class Payment extends Model {
    public id!: number;
    public passwordHash!: string;
    public name!: string;
    public phone!: string;
    public role!: string;
    public email!: string;
}
Service.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: new DataTypes.STRING(100),
        allowNull: false
    },
    description: {
        type: new DataTypes.STRING(100),
        allowNull: false
    },
    photo: {
        type: new DataTypes.STRING(1000),
        allowNull: false
    },
}, {
    tableName: 'services',
    sequelize: sequelize,
    timestamps: false
});

Payment.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    time: {
        type: new DataTypes.STRING(100),
        allowNull: false
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    status: {
        type: new DataTypes.ENUM('start', 'evaluation', 'waiting', 'payment', 'unpaid'),
        allowNull: false
    },
    cardNumber: {
        type: new DataTypes.STRING(100),
        allowNull: true
    },
    cardType: {
        type: new DataTypes.STRING(100),
        allowNull: true
    },
    transactionID: {
        type: new DataTypes.STRING(200),
        allowNull: true
    },
    usersId: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    },
    movieId: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true
    },
    serviceOrderId: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true
    },
}, {
    tableName: 'payments',
    sequelize: sequelize,
    timestamps: false
});

const PaymentModel = {Service,Payment}
export default PaymentModel;