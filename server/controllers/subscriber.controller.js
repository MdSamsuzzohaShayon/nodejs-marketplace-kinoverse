const db = require('../models');
const { Subscriber } = db;




const addSubscriber = async (req, res) => {

    const { email } = req.body;
    if (!email) return res.status(406).json({ msg: "Please provide email address" });

    const emailExist = await Subscriber.findOne({ where: { email } });
    if (emailExist) {
        res.status(208).json({ msg: "already registered", emailExist });
    } else {
        const subscriber = await Subscriber.create({
            email: req.body.email
        });
        res.status(200).json({ msg: "Created new Subscriber", subscriber });
    }
}

// /home/ubuntu/kinoverse/client


const getAllSubscribers = async (req, res) => {

    try {
        const subscriber = await Subscriber.findAll({});
        res.status(200).json({ msg: "Get all Subscribers", subscriber });
    } catch (error) {
        throw error;
    }

}


module.exports = {
    addSubscriber,
    getAllSubscribers
}