const mongoose = require('mongoose');

const HashTagSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true
    },
    Tweets:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Tweet'
    }]
})


const HashTag=mongoose.model('HashTag',HashTagSchema);

module.exports=HashTag