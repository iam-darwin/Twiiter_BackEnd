const {TweetRepository}=require("../repository/index")

class TweetService{
    constructor(){
        this.tweetRepo=new TweetRepository();
    }

    async create(data){
        try {
            const tweet =await this.tweetRepo.create(data);
        } catch (error) {
            throw {error}
        }
    }
}

module.exports=TweetService