import express from 'express';
import {create} from '../../controllers/tweetController.js';

const router = express.Router();

router.post('/tweets', create);

export default router;
