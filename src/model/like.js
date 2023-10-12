import mongoose from "mongoose";

const likeSchema=new mongoose.Schema({
    onModel:{
        type:String,
        required:true,
        enum:["Tweet"]
    },
    likeable:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        refPath:'onModel'
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    }
},{timestamps:true})

export default Like=mongoose.model("Like",likeSchema);
