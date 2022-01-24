import express from 'express';
import cors from 'cors';
// import swaggerUi from 'swagger-ui-express';
// import * as swaggerDocument from '../swagger.json';
// import swaggerJsDoc from 'swagger-jsdoc';
import v1 from './v1';
import v2 from './v2';
// import cron from 'node-cron'
import nodeAdmin from './nodeAdmin'
import fileUpload from 'express-fileupload'

require('dotenv').config()

const sequelize = nodeAdmin.sequelize
// sequelize.sync({
// }).then(() => {
//   console.log('================================== [ ALL TABLES ARE SYNCED ] =====================================');
// })

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'Test App swag-seq-express',
      description: 'Testing',
      contact: {
        name: 'V-Man'
      },
      servers: ["http://localhost:3000/api/"]
    }
  },
  apis: ['./**.ts']
}

const app: express.Application = express();

// const swaggerDocs = swaggerJsDoc(swaggerOptions);

// app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

app.use(fileUpload({
  createParentPath: true
}));

app.use(express.json());
app.use(express.text())
//app.use(bodyParser.text());
app.use(express.urlencoded({ extended: false }));

app.get('/check', (req, res, next) => {
  res.json({ msg: "Hello" });
});
app.use('/api/v1', v1);
app.use('/api/v2', v2);

// app.listen(443, function () {
//   console.log('Example app listening on port 443!');
// });
const port = process.env.PORT;
app.listen(port, function () {
  console.log('Example app listening on port 4000!');
});

// app.listen(8080, function () {
//   console.log('Example app listening on port 8080!');
// });

