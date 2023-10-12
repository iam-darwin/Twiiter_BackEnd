import { LikeRepository,TweetRepository } from "../repository/index.js";


class LikeService{

    constructor(){
        this.likeRepo=new LikeRepository();
        this.tweetRepo=new TweetRepository();
    }

    async toggleLike(modelId,modelType,userId){
        // console.log(modelId,modelType,userId);
        if(modelType=='Tweet'){
            var likeAble=await this.tweetRepo.getId(modelId);
            console.log("Likebale",likeAble);
        }else if(modelType=='Comment'){

        }else{
            throw new Error("Type error")
        }

        let exists=await this.likeRepo.findUserAndLikedExists({
            userId:userId,
            onModel:modelType,
            likeable:modelId
        })
        console.log(exists);

        if(exists){
            await this.likeRepo.deleteExistingLike({
                userId:userId,
                onModel:modelType,
                likeable:modelId
            });
            likeAble.likes.pull(exists.id);
            await likeAble.save();
            var isAdded=false;
        }else{
            console.log("im here");
            const data=await this.likeRepo.create({
                userId:userId,
                onModel:modelType,
                likeable:modelId
            })
            likeAble.likes.push(data.id)
            await likeAble.save()
            var isAdded=true;
        }   

        return isAdded;
    }

}


export default LikeService;