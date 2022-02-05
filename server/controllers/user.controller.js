const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
// bcryptjs 
const db = require('../models');
const { User } = db;

const { SUPER, GENERAL, STUFF } = require('../config/keys.js');


const login = async (req, res, next) => {
    const errors = validationResult(req);
    // console.log(errors);
    if (!errors.isEmpty()) {
        return res.status(406).json({ error: errors.array() });
    }


    const { email, password } = req.body;

    try {
        const userExist = await User.findOne({ where: { email } });
        // console.log(userExist, "exist");
        if (!userExist) return res.status(404).json({ msg: "User doesn't exist" });
        const isPasswordCorrect = await bcrypt.compare(password, userExist.dataValues.password);
        if (!isPasswordCorrect) return res.status(406).json({ message: "Invalid credentials" });
        const token = jwt.sign({ email: userExist.email, id: userExist.id, role: userExist.role }, process.env.JWT_SECRET, { expiresIn: "1h" });
        const newUser = {
            name: userExist.name,
            email: userExist.email,
            role: userExist.role,
            id: userExist.id,
        };
        res.status(200).json({ user: newUser, token });
    } catch (err) {
        res.status(500).json({ message: "Something went wrong" });
    }
}



/*
const register = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(406).json({ error: errors.array()[0].msg });
    }


    const { email, password, name, role, phone } = req.body;
    // console.log(req.body);

    try {
        const userExist = await User.findOne({ where: { email } });
        // console.log("Exist user - ", userExist);
        if (userExist !== null) return res.status(208).json({ message: "User already exists" });


        // // console.log(password);
        const hashedPassword = await bcrypt.hash(password, 10);
        // console.log("hashed password - ", hashedPassword);
        const user = await User.create({ email, password: hashedPassword, name, role, phone });
        // console.log("User - ", user);

        const token = jwt.sign({ email: user.email, id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
        // console.log(token);

        res.status(201).json({ user, token });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something went wrong", error });

    }

}
*/




const register = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(406).json({ error: errors.array()[0].msg });
    }

    let role = GENERAL;

    const { email, password, name, phone } = req.body;
    // WHETHER GENERAL OR STUFF USER CAN BE CREATED 
    if (req.body.role === STUFF) role = STUFF;
    // console.log(req.userId, req.userRole);

    try {
        // ONLY SUPER USER CAN CREATE A NEW USER 
        if (req.userRole === SUPER) {
            const userExist = await User.findOne({ where: { email } });
            // console.log("Exist user - ", userExist);
            if (userExist !== null) return res.status(208).json({ msg: "User already exists" });


            // // console.log(password);
            const hashedPassword = await bcrypt.hash(password, 10);
            // console.log("hashed password - ", hashedPassword);
            const user = await User.create({ email, password: hashedPassword, name, role, phone });
            // console.log("User - ", user);

            const token = jwt.sign({ email: user.email, id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "1h" });
            // console.log(token);

            res.status(201).json({ user, token });
        } else {
            res.status(405).json({ msg: "You do not have permission to create a new user, only super user can do that" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Something went wrong", error });

    }

}




const deleteUser = async (req, res, next) => {
    if (req.userRole === SUPER) {
        const deleteUser = await User.destroy({ where: { id: req.params.userId } });
        res.status(200).json({ msg: "User is been deleted successfully", deleteUser })
    } else {
        res.status(405).json({ msg: "You do not have permission to create a new user, only super user can do that" });
    }
}


const getAllUsers = async (req, res, next) => {
    try {
        let allUsers = await User.findAll();

        allUsers = allUsers.map((user, i) => {
            // console.log("inside all user - ");
            return {
                id: user.id,
                name: user.name,
                email: user.email,
                phone: user.phone,
                role: user.role,
            }
        });
        res.status(200).json({ msg: "all users", allUsers });
    } catch (error) {
        console.log(error);
    }
}




module.exports = { login, register, getAllUsers, deleteUser };