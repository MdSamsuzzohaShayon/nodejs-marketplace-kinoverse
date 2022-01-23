import { Sequelize} from 'sequelize';

require('dotenv').config()

const DB_HOST = process.env['DB_HOST'];
const MYSQL_DATABASE = process.env['MYSQL_DATABASE'];
const MYSQL_USER = process.env['MYSQL_USER'];
const MYSQL_PASSWORD = process.env['MYSQL_PASSWORD'];

const sequelize = new Sequelize(MYSQL_DATABASE, MYSQL_USER, MYSQL_PASSWORD, { //dev
    dialect: 'mysql',
    host: DB_HOST,
})


sequelize.authenticate()
  .then(() => {
    console.log('authenticate is succesfull');
  })
  .catch(err => {
    console.error('error=================',err);
    process.exit(-1);
  })

export default sequelize;