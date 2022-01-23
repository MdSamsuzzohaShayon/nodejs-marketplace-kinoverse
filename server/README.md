1.1)Create config file kinoverse-api\src\config\db-dev.ts

import { Sequelize} from 'sequelize';
const sequelize =  new Sequelize('<database*>', '<username*>', '<password*>', {
  host: '<host*>',
  dialect:  'postgres'
});

sequelize.authenticate()
  .then(() => {
    console.log('authenticate is succesfull');
  })
  .catch(err => {
    console.error('error=================',err);
    process.exit(-1);
  })

export default sequelize;

database* - This is the name of your database
username* - This is the username of your database
password* - This is the password of your database
host* - This is the host of your database

1.2)Create config file kinoverse-api\src\config\s3-dev.json
{
    "accessKeyId": "<accessKeyId>",
    "secretAccessKey": "<secretAccessKey>"
}

2)Go to the folder kinoverse-api
# cd kinoverse-api/

3)Update package lists
# sudo apt update

4)Installing Node.js
# sudo apt install nodejs

5)Installing npm
# sudo apt install npm

6)Installation of project libraries
# npm i 

7)Installing typescript
# sudo npm install -g typescript
# sudo npm install -g ts-node

8)Create all Database tables
# ts-node src/createDatabase

9)Installation pm2
# sudo npm install pm2 -g

10)Installation typescript on pm2
# sudo pm2 install typescript

11)start server
# pm2 start src/index.ts