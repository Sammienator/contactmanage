const express = require('express')
const mongoose = require('mongoose')
const morgan  = require('morgan')

const bodyParser = require('body-parser')

const connectDB = require('./config/db');


const app = express();

// middleware
app.use(express.json());
app.use(morgan("tiny"));
5



// routes
app.use("/api/", require("./routes/auth"));




// server config


const PORT = process.env.PORT || 4000;
app.listen(PORT, async () => {


    try{
        await connectDB();
    console.log(`server listening on port : ${PORT}`);

    }catch (err){
        console.log(err);

    }
   

} );