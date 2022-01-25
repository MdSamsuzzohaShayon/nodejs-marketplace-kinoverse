const db = require('../models');
const { subscribers } = db;




const addSubscriber = async (req, res) => {

    const { email } = req.body;
    if (!email) return res.status(406).json({ msg: "Please provide email address" });

    const emailExist = await subscribers.findOne({ where: { email } });
    if (emailExist) {
        res.status(208).json({ msg: "already registered", emailExist });
    } else {
        const subscriber = await subscribers.create({
            email: req.body.email
        });
        res.status(200).json({ msg: "Created new subscribers", subscriber });
    }
}




const getAllSubscribers = async (req, res) => {

    try {
        const subscriber = await subscribers.findAll({});
        res.status(400).json({ msg: "Get all subscriberss", subscriber });
    } catch (error) {
        throw error;
    }

}


module.exports = {
    addSubscriber,
    getAllSubscribers
}