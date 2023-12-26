const mongoose = require("mongoose")
const corrs=require("cors");
const express = require("express");
const app = express();
//const path = require('path');

const listRoutes = require("./routes/lists")

const url = "mongodb+srv://xomaradwanx:55Jana55!@cluster0.2dtovr6.mongodb.net/codee"

mongoose.connect(url).then(()=>{
   console.log("connected");
})
app.use(corrs());
app.use(express.json());



app.use(listRoutes);



app.listen(4000,()=>{
    console.log("here");
});
