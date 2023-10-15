import { CommentService } from '../services/index.js';

const commentService = new CommentService();

const createComment = async (req, res) => {
    try {
        //modelId,modelType,userId,content
        const response = await commentService.commentOnTweetOrComment(req.query.modelId,req.query.modelType,req.user.userId,req.body.content)
        return res.status(201).json({
            message: 'Comment Added',
            data: response,
            success: 'True',
            err: {}
        });
    } catch (error) {
        return res.status(401).json({
            message: 'something went wrong, check your code Dumb',
            success: 'Fail',
            err: error
        });
    }
}

export { createComment };
