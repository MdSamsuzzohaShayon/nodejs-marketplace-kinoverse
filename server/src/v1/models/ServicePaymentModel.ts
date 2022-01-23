import { Model, DataTypes } from 'sequelize';
import nodeAdmin from '../../nodeAdmin'

const sequelize = nodeAdmin.sequelize

class ServicePayment extends Model {
    public id!: number;
    public serviceId!: number;
    public paymentId!: number;
}

ServicePayment.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    serviceId : {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    },
    servicesordersid  : {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    }
}, {
    tableName: 'servicepayments',
    sequelize: sequelize,
    timestamps: false
});

export default ServicePayment;