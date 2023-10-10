const mongoose = require('mongoose');

const tweetSchema=new mongoose.Schema({
    content:{
        type:String,
        required:true,
        max:[250,"Only 250 chars allowed"]
    },
    hashTag:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:'HashTag'
    }]
})


const Tweet=mongoose.model('Tweet',tweetSchema);

module.exports=Tweet