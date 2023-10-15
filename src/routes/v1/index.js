import express from 'express';
import {createTweet} from '../../controllers/tweetController.js';
import { createLike } from '../../controllers/likeController.js';
import { createComment } from '../../controllers/commentControllers.js';
import { createuser,loginUser } from '../../controllers/userController.js';
import {authenticate} from "../../midllewares/authenticate.js"


const router = express.Router();

router.post('/tweets',authenticate,createTweet);

router.post('/tweet/like',authenticate,createLike)

router.post('/comment',authenticate,createComment)

router.post("/user/signup",createuser)
router.post("/user/login",loginUser)

export default router;
