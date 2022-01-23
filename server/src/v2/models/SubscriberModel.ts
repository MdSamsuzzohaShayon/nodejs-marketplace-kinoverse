import { Model, DataTypes } from 'sequelize';
import nodeAdmin from '../../nodeAdmin'

const sequelize = nodeAdmin.sequelize

class Subscriber extends Model {
    public id!: number;
    public name!: string;
    public email!: string;
    public credit: number;
    public createdAt: string;

    // static associate(models: any) {
    //     // define association here
    //     // MANY TO MANY RELATIONSHIP 
    //     Subscriber.belongsTo(models.User);

    // }
}

Subscriber.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: new DataTypes.STRING(100),
        allowNull: false
    },
    email: {
        type: new DataTypes.STRING(255),
        allowNull: false,
        unique: true
    },
    credit: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: true
    },
}, {
    tableName: 'subscribers',
    sequelize: sequelize,
    timestamps: false
});

export default Subscriber;