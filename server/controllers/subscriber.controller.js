const db = require('../models');
const { validationResult } = require('express-validator');
const { Subscriber, Waitlist } = db;
const emailSend = require('../utils/emailSend.js');




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
        emailSend("Kinoverse subscriber ", "You have got one new subscrier", `<div><h2>Subscriber email address: ${email}</h2></div>`);
        res.status(200).json({ msg: "Created new Subscriber", subscriber });
    }
}

// /home/ubuntu/kinoverse/client


const getAllSubscribers = async (req, res) => {

    try {
        const subscriberList = await Subscriber.findAll({});
        res.status(200).json({ msg: "Get all Subscribers", subscriberList });
    } catch (error) {
        throw error;
    }

}

const getAllWaitlist = async (req, res) => {

    try {
        const waitlist = await Waitlist.findAll({});
        res.status(200).json({ msg: "Get all Subscribers", waitlist });
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
    const screen = String(req.body.screen).toLocaleLowerCase() === "true";
    const animation = String(req.body.animation).toLocaleLowerCase() === "true";

    console.log(screen, animation);


    const waitlistExist = await Waitlist.findOne({ where: { email } });
    if (waitlistExist === null) {
        // CREATE NEW SUBSCRIBER 
        const newWaitedlist = await Waitlist.create({
            name,
            email,
            resume: req.file.key,
            screen,
            animation
        });
        res.status(201).json({ msg: "added to waitlist - create", waitlist: newWaitedlist });
    } else {
        // console.log(Waitlist);
        // console.log(req.file);
        res.status(208).json({ msg: "You are already in wait list" });
        // if (Waitlist.dataValues.waitlist === true) {
        // } else {
        //     const updatedSubscriber = Subscriber.update({
        //         name,
        //         resume: req.file.key,
        //         waitlist: true
        //     }, {
        //         where: {
        //             email: subscriberExist.dataValues.email
        //         }
        //     });
        //     res.status(200).json({ msg: "added to waitlist - update", subscriber: updatedSubscriber });
        // }
    }
}



module.exports = {
    addSubscriber,
    getAllSubscribers,
    addToWaitlist,
    getAllWaitlist
}