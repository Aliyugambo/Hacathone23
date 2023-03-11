const userModel = require('../models/userSchema');
const Jwt = require('jsonwebtoken');
require('dotenv').config();

const authenticateToken = async (req, res, next) => {
    const token = req.cookies.accessToken;

    try {
        if (!token)
            return res.status(403).send({
                message: 'Token not Found',
            });

        if (token === null || token === undefined) {
            return res.status(403).send({ message: 'Insert Token' });
        }

        // If Token is present
        if (token) {
            const user = Jwt.verify(token, process.env.JWT_SECRET);
            req.user = await userModel.findById(user._id);
            next();
        } else {
        }
    } catch (error) {
        res.clearCookie('accessToken');
        next(error);
    }
};

module.exports =  authenticateToken;