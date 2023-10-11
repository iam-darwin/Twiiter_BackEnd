import mongoose from 'mongoose';

const tweetSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
        maxlength: [250, "Only 250 characters allowed"]
    }
});

const Tweet = mongoose.model('Tweet', tweetSchema);

export default Tweet;
