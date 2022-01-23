import { Model, DataTypes } from 'sequelize';
import nodeAdmin from '../../nodeAdmin'
import ServicePayment from './ServicePaymentModel';
import PaymentModel from './PaymentModel';
import ServiceOrder from './ServiceOrderModel';
const Payment = PaymentModel.Payment
const Service = PaymentModel.Service
const sequelize = nodeAdmin.sequelize

Service.belongsToMany(ServiceOrder, {
    as: 'servicesorders',
    through: ServicePayment,
    foreignKey: 'serviceId'
});

ServiceOrder.belongsToMany(Service, {
    as: 'services',
    through: ServicePayment,
    foreignKey: 'servicesordersid'
});


export default Service;