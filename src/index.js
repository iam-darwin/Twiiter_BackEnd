const express =require("express");
const connectDb = require("./config/database");

const app=express();


app.listen(3000,async ()=>{
    console.log("Server started working at 3000");
    await connectDb()
})