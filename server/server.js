const dotenv = require('dotenv');
if (process.env.NODE_ENV === "development") {
    dotenv.config({ path: "./.env.dev" });
} else {
    dotenv.config({ path: "./.env.prod" });
}
const express = require('express');
const cors = require('cors');
const subscriberRoutes = require('./routes/subscriberRouter.js');
const userRoutes = require('./routes/userRouter');
const contestRoutes = require('./routes/contestRouter');

const db = require('./models');


const app = express();


// middleware

// app.use(cors({ origin: process.env.FRONTEND_URL }));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// routers
app.get('/test', (req, res, next) => {
    res.send("hi");
})
app.use('/api/subscriber', subscriberRoutes);
app.use('/api/user', userRoutes);
app.use('/api/contest', contestRoutes);




const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);

});



// IF THERE ARE NO TABLE THIS WILL CREATE 
// db.sequelize.sync({ alter: true, force: true }).then(() => {
//     app.listen(PORT, () => {
//         console.log(`Server is running on ${PORT}`);

//     });
// });





