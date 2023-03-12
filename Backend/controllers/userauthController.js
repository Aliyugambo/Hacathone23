const jwt = require('jsonwebtoken');
const UserModel = require('../models/userSchema');
const bcrypt = require('bcrypt');
require('dotenv').config();

//Sign_Up
const Signup = async (req, res, next) => {

    // console.log(req.body);
    const { name,Disease,password,age,phnno, gender, priority,impact} = req.body;
       
    // checking all fields are filled 
    if (!name ||!Disease ||!password ||!age ||!phnno ||!gender  ||!priority ||!impact) {
        return res.status(400).send({ message: 'Please fill all the fields!' });
    }
    
    //   Saving to the database
    try {
        const user = await UserModel.create({
            name,
            Disease,
            password,
            age,
            phnno, 
            gender, 
            priority,
            impact
        });
        return res.status(200).send({ message: 'User Account created successfully' });
        // console.log("user successs");
    } catch (error) {
        next(error);
    }
};

//LOGIN Controller
const login = async (req, res, next) => {
    const { name, password } = req.body;
    
    if (!name || !password) {
        return res.status(400).send({ message: 'Please fill the required fields' });
    }

    try {
        const user = await UserModel.findOne({ name: name });

        if (!user){
            return res.status(401).send({ message: 'This email is not found!' });
        }
        
        const isValidPassword = await user.isValidPassword(password);

        if (!isValidPassword)
            return res.status(401).send({ message: 'Password is not correct!' });

        const payload = {
            id: user._id,
            name: user.name,
        };

        const token = jwt.sign(payload, process.env.JWT_SECRET, {
            expiresIn: process.env.EXPIRE || '1hr',
        });
        
        res.cookie('accessToken', token, {
            httpOnly: true,
        }).send({
            message: token,
            email: user.name,
            name: `${user.name}`,
        });
    } catch (error) {
        next(error);
    }
};


//LOGOUT CONTROLLER
const logout = async (req, res) => {
    res.cookie('accessToken', '', { maxAge: 1 });
    res.send('Logged out successfully!');
};

const account  = { Signup, login, logout };

module.exports = account;