require("dotenv").config();
const express = require('express');
const employeeRoute = require("./routes/employee");
const userRoute = require("./routes/user");
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT;
const mongoString = process.env.MONGODB_STRING;

app.use(express.json());
app.use(express.urlencoded());

mongoose.connect(mongoString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database.', err);
    process.exit();
});

app.use("/api/user", userRoute);
app.use("/api/emp", employeeRoute);

app.get('/', (req, res) => {
    res.send("<h1>Welcome to Assignment 1 from Shakil Miah (101308549</h1>");
});


app.listen(port, () => {
    console.log("Server is listening on port "+ port);
});
