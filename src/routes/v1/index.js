import express from 'express';
import {createTweet} from '../../controllers/tweetController.js';
import { createLike } from '../../controllers/likeController.js';
import { createComment } from '../../controllers/commentControllers.js';
import { createuser,loginUser } from '../../controllers/userController.js';


const router = express.Router();

router.post('/tweets', createTweet);

router.post('/tweet/like',createLike)

router.post('/comment',createComment)

router.post("/user/signup",createuser)
router.post("/user/login",loginUser)

export default router;
