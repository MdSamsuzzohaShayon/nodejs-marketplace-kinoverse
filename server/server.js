const dotenv = require('dotenv');
if (process.env.NODE_ENV === "development") {
    dotenv.config({ path: "./.env.dev" });
} else {
    dotenv.config({ path: "./.env.prod" });
}
const express = require('express');
const cors = require('cors');
const subscriberRoutes = require('./routes/subscriberRouter.js');
const db = require('./models');


const app = express();


// middleware

app.use(cors({ origin: process.env.FRONTEND_URL }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// routers
app.use('/api/subscriber', subscriberRoutes);


const PORT = process.env.PORT || 4000;
// IF THERE ARE NO TABLE THIS WILL CREATE 
db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on ${PORT}`);

    });
});