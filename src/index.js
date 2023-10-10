const express =require("express");
const connectDb = require("./config/database");

const apiRoutes=require("./routes/index");
const Tweet = require("./model/tweet");

const app=express();

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/api",apiRoutes)


app.listen(7000,async ()=>{
    console.log("Server started working at 3000");
    await connectDb();
    data={
        content:"This is my first tweet"
    }
    // const response=await Tweet.create(data);
    // console.log(response);
})