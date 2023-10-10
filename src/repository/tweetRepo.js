const Tweet = require("../model/tweet");

class TweetRepository{

    async create(data){
        try {
            const tweet=await Tweet.create(data);
            return tweet;
        } catch (error) {
            throw {error}
        }
    }
}

module.exports=TweetRepository