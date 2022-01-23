import { Model, DataTypes } from 'sequelize';
import nodeAdmin from '../../nodeAdmin'

const sequelize = nodeAdmin.sequelize

class ServiceOrder extends Model {
    public id!: number;
    public passwordHash!: string;
    public name!: string;
    public phone!: string;
    public role!: string;
    public email!: string;
}

ServiceOrder.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    createdAt: {
        type: DataTypes.DATE ,
        allowNull: false
    },
    status: {
        type: new DataTypes.STRING(100),
        allowNull: true
    },
    description: {
        type: new DataTypes.STRING(1000),
        allowNull: true
    },
    price: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true,
        defaultValue: 0
    },
    usersId: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true
    },
    paymentId  : {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true
    }
}, {
    tableName: 'servicesorders',
    sequelize: sequelize,
    timestamps: false
});

export default ServiceOrder;