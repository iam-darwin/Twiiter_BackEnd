const {TweetRepository,HashTagRepository}=require("../repository/index")

class TweetService{
    constructor(){
        this.tweetRepo=new TweetRepository();
        this.hashTagRepo=new HashTagRepository();
    }

    async create(data){
        try {
            /**
             {
                content:"This is my #frist tweet. I am really #excited"
             }
             */
            const tweetContent=data.content
            const hashtagRegex = /#(\w+)/g;
            const hashTags=tweetContent.match(hashtagRegex).map((tag)=> tag.substring(1).toLowerCase());//["first","second"]
            const tweet =await this.tweetRepo.create(data);
            const presentHashTags=await this.hashTagRepo.findMany(hashTags);
            const titleOfPresentTags= presentHashTags.map((tag)=>tag.title)
            let newTags=hashTags.filter(tag=>!titleOfPresentTags.includes(tag))
            newTags=newTags.map((tag)=>{
                return {
                    title:tag,
                    Tweets:[tweet.id]
                }
            })
            await this.hashTagRepo.bulkCreate(newTags)
            presentHashTags.forEach(tag=>{
                tag.Tweets.push(tweet.id)
                tag.save();
            })
            return tweet;
        } catch (error) {
            throw {error}
        }
    }
}

module.exports=TweetService