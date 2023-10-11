const express = require("express");
const connectDb = require("./config/database");

const apiRoutes = require("./routes/index");
const Tweet = require("./model/tweet");
const HashTag = require("./model/hashtag");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", apiRoutes);

    

app.listen(7000, async () => {
  console.log("Server started working at 3000");
  await connectDb();
  // const hashtags=["first","second"]
  // const data=await HashTag.find({
  //     title:hashtags
  // })
  // console.log(data);

  
});
