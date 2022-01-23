import { Model, DataTypes } from 'sequelize';
import nodeAdmin from '../../nodeAdmin'

const sequelize = nodeAdmin.sequelize

class ContactUs extends Model {
    public id!: number;
    public name!: string;
    public email!: string;
    public company!: string;
    public location!: string;
    public service!: string;
}

ContactUs.init({
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
        allowNull: false
    },
    company: {
        type: new DataTypes.STRING(1000),
        allowNull: false
    },
    location: {
        type: new DataTypes.STRING(1000),
        allowNull: false
    },
    service: {
        type: new DataTypes.STRING(100),
        allowNull: false
    },
    description: {
        type: new DataTypes.STRING(5000),
        allowNull: false
    },
}, {
    tableName: 'contactuss',
    sequelize: sequelize,
    timestamps: false
});

export default ContactUs;