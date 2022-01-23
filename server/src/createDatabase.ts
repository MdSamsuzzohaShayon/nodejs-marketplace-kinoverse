import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import * as swaggerDocument from '../swagger.json';
import swaggerJsDoc from 'swagger-jsdoc';
import v1 from './v1';
import v2 from './v2';
import nodeAdmin from './nodeAdmin';

require('dotenv').config()

const sequelize = nodeAdmin.sequelize;

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'Test App swag-seq-express',
      description: 'Testing',
      contact: {
        name: 'V-Man'
      },
      servers: ["http://localhost:8080"]
    }
  },
  apis: ['./**.ts']
}

const app: express.Application = express();

const swaggerDocs = swaggerJsDoc(swaggerOptions);

app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/v1', v1);
app.use('/v2', v2);

const DB_HOST = process.env['DB_HOST'];
const MYSQL_DATABASE = process.env['MYSQL_DATABASE'];
const MYSQL_USER = process.env['MYSQL_USER'];
const MYSQL_PASSWORD = process.env['MYSQL_PASSWORD'];
console.log('================================== [ ' + DB_HOST + ' ] =====================================');
console.log('================================== [ ' + MYSQL_DATABASE + ' ] =====================================');
console.log('================================== [ ' + MYSQL_USER + ' ] =====================================');
console.log('================================== [ ' + MYSQL_PASSWORD + ' ] =====================================');
sequelize.sync({
  alter: true,
}).then(() => {
  console.log('================================== [ ALL TABLES ARE CREATED ] =====================================');
})

app.listen(30000, function () {
  console.log('Example app listening on port 8080!');
});
