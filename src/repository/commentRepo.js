import Comment from "../model/comment.js"
import CrudRepository from "./crudRepo.js"


class CommentRepository extends CrudRepository{
    constructor(){
        super(Comment)
    }
}


export default CommentRepository;