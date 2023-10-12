import express from 'express';
import connectDb from './config/database.js';
import apiRoutes from './routes/index.js';
import UserRepository from './repository/userRepo.js';
import LikeRepository from './repository/likeRepo.js';
import {LikeService,TweetService} from './services/index.js';


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', apiRoutes);

app.listen(7000, async () => {
  console.log('Server started working at 3000');
  await connectDb();
});
