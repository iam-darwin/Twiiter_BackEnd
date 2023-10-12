import {CommentRepository,TweetRepository} from "../repository/index.js";


class CommentService{
    constructor(){
        this.commentRepo=new CommentRepository();
        this.tweetRepo=new TweetRepository();
    }

    async commentOnTweetOrComment(modelId,modelType,userId,content){
        try {
            console.log(modelId,modelType,userId,content);
            if(modelType=='Tweet'){
                var commentAble=await this.tweetRepo.getId(modelId);
            }else if(modelType=='Comment'){
                var commentAble=await this.commentRepo.getId(modelId);
            }else{
                throw new Error("Invalid type")
            }

            const comment=await this.commentRepo.create({
                content:content,
                onModel:modelType,
                userId:userId,
                commentable:modelId,
                comments:[]
            })
            console.log("Beyod 1");
            commentAble.comments.push(comment.id);
            console.log("beyond 2");
            await commentAble.save();

            return comment;
        } catch (error) {
            console.log("something went wrong on Service layer");
            throw {error}
        }
    }
}

export default CommentService