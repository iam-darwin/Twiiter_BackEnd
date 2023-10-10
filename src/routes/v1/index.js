const express =require("express");

const tweetController=require("../../controllers/tweetController")

const router=express.Router();

router.post("/tweets",tweetController.create)

module.exports=router