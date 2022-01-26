const db = require('../models');
const { validationResult } = require('express-validator');
const { Subscriber } = db;




const addSubscriber = async (req, res) => {


    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(406).json({ error: errors.array()[0].msg });
    }
    const { email } = req.body;

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



const addToWaitlist = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(406).json({ msg: "invalid email or name", errors: errors.array() });
    }

    if (!req.file) {
        return res.status(406).json({ msg: "No file attached" })
    }


    // FIND AND UPDATE FROM SUBSCRIBER 
    const { email, name } = req.body;
    const subscriberExist = await Subscriber.findOne({ where: { email } });
    if (subscriberExist === null) {
        // CREATE NEW SUBSCRIBER 
        const newSubscriber = await Subscriber.create({
            name,
            email,
            resume: req.file.key,
            waitlist: true
        });
        res.status(201).json({ msg: "added to waitlist - create", subscriber: newSubscriber });
    } else {
        // console.log(subscriberExist);
        // console.log(req.file);
        if (subscriberExist.dataValues.waitlist === true) {
            res.status(208).json({ msg: "You are already in wait list" });
        } else {
            const updatedSubscriber = Subscriber.update({
                name,
                resume: req.file.key,
                waitlist: true
            }, {
                where: {
                    email: subscriberExist.dataValues.email
                }
            });
            res.status(200).json({ msg: "added to waitlist - update", subscriber: updatedSubscriber });
        }
    }
}



module.exports = {
    addSubscriber,
    getAllSubscribers,
    addToWaitlist
}