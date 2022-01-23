import { Model, DataTypes } from 'sequelize';
import nodeAdmin from '../../nodeAdmin'

const sequelize = nodeAdmin.sequelize

class Movie extends Model {
    public id!: number;
    public passwordHash!: string;
    public name!: string;
    public phone!: string;
    public role!: string;
    public email!: string;
}

Movie.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    createdAt: {
        type: DataTypes.DATE ,
        allowNull: true
    },
    title: {
        type: new DataTypes.STRING(100),
        allowNull: true
    },
    status: {
        type: new DataTypes.STRING(100),
        allowNull: false
    },
    genre: {
        type: new DataTypes.STRING(100),
        allowNull: true
    },
    description: {
        type: new DataTypes.STRING(1000),
        allowNull: false
    },
    price: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true
    },
    // urls: {
    //     type: new DataTypes.ARRAY(DataTypes.STRING(1000)),
    //     allowNull: false
    // },
    userId : {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        
    },
    paymentId  : {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true
    }
}, {
    tableName: 'movies',
    sequelize: sequelize,
    timestamps: false
});

export default Movie;