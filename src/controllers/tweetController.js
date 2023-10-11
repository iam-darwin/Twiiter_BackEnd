import { TweetService } from '../services/index.js';

const tweetService = new TweetService();

const create = async (req, res) => {
    try {
        console.log(req.body);
        const response = await tweetService.create(req.body);
        return res.status(201).json({
            message: 'tweet created',
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

export { create };
