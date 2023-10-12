import CrudRepository from "./crudRepo.js";
import Like from "../model/like.js"

class LikeRepository extends CrudRepository{
    constructor(){
        super(Like)
    }

    async findUserAndLikedExists(data){
        try {
            const response =await Like.findOne(data);
            return response;
        } catch (error) {
            console.log("error in like repo");
            throw {error}
        }
    }

    async deleteExistingLike(data){
        try {
            await Like.findOneAndDelete(data);
        } catch (error) {
            console.log("error in like repo");
            throw {error}
        }
    }
}

export default LikeRepository