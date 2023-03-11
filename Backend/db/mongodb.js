const mongoose = require("mongoose");
const CONFIG = require("../config/config");

// const MONGODB_CONNECTING_URL = CONFIG.env.MONGODB_CONNECTING_URL;

const connectToMongoDB = () => {
    mongoose.connect(CONFIG.MONGODB_CONNECTING_URL);

    mongoose.connection.on("connected", () => {
        console.log("Successfully Connected to MongoDB");
    });

    mongoose.connection.on("error", (err) => {
        console.log("Error Connecting to MongoDB", err);
    });
};

module.exports = connectToMongoDB;