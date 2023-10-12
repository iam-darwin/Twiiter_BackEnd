import mongoose from 'mongoose';

const tweetSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
        maxlength: [250, "Only 250 characters allowed"]
    },
    likes:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Like'
        }
    ]
},{timestamps:true});


export default Tweet= mongoose.model('Tweet', tweetSchema);

