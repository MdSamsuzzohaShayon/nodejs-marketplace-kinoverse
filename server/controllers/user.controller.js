const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
// bcryptjs 
const db = require('../models');
const { User } = db;


const login = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(406).json({ error: errors.array() });
    }

    const { email, password } = req.body;

    try {
        const userExist = await User.findOne({ where: { email } });
        if (!userExist) return res.status(404).json({ message: "User doesn't exist" });
        const isPasswordCorrect = await bcrypt.compare(password, userExist.password);
        if (!isPasswordCorrect) return res.status(406).json({ message: "Invalid credentials" });
        const token = jwt.sign({ email: userExist.email, id: userExist.id }, process.env.JWT_SECRET, { expiresIn: "1h" });
        res.status(200).json({ user: userExist, token });
    } catch (err) {
        res.status(500).json({ message: "Something went wrong" });
    }
}

const register = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(406).json({ error: errors.array()[0].msg });
    }


    const { email, password, name, role, phone } = req.body;
    console.log(req.body);

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


const getAllUsers = async (req, res, next) => {
    let allUsers = await User.findAll();
    // console.log(req.userId);
    // const newUserList = [];
    // for (let i = 0; i < allUsers.length; i++) {
    //         newUserList.push() ;
    // }
    console.log("before all user - ");
    allUsers = allUsers.map((user, i) => {
        // console.log("inside all user - ");
        return {
            name: user.name,
            email: user.email,
            phone: user.phone,
            role: user.role,
        }
    });
    // console.log("after all user - ");
    // "password": "$2a$10$5nIiJCwVnd3KiAohiAKWrOX2nUTQpZ4jBR.phPJdZUUMZ9u2YvKjS",
    //         "name": "Lionel Messi",
    //         "phone": "248473643746",
    //         "email": "lionel@psg.com",
    //         "role": "SUPER",
    res.status(200).json({ msg: "all users", allUsers });
}




module.exports = { login, register, getAllUsers };