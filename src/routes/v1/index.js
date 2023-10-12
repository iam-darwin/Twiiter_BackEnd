import express from 'express';
import {createTweet} from '../../controllers/tweetController.js';
import { createLike } from '../../controllers/likeController.js';
import { createComment } from '../../controllers/commentControllers.js';


const router = express.Router();

router.post('/tweets', createTweet);

router.post('/tweet/like',createLike)

router.post('/comment',createComment)

export default router;
