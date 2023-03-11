const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const CONFIG = require("./config/config");
const connectToMongoDB = require("./db/mongodb");
const cookieParser = require("cookie-parser");
const ejs = require("ejs");
// Router
const userRoute = require("./routes/user");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
// app.use(express.static("medicalcenter-master"));
// Set static folder
app.use(express.static(path.join(__dirname, "../medicalcenter-master")));

// CONNECTING TO DATABASE
connectToMongoDB();
// Add Midleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cookieParser());

app.use("/", userRoute);


// ERROR HANDALLER MIDDLEWARE
app.use((err, req, res, next)=>{
    console.log(err);
    const errorStatus = err.status || 500;
    res.status(errorStatus).send("An error occured!");
    next();
});

app.get("/", (req, res)=>{
    // res.send("Welcome to my homepage, Please Signup or login!");
    res.render("./index");
});

app.get("/about", (req, res)=>{
    // res.send("Welcome to my homepage, Please Signup or login!");
    res.render("./about");
});
app.listen(CONFIG.PORT,(req, res)=>{
    console.log(`Server Started successfully at http://localhost:${CONFIG.PORT}`);
});