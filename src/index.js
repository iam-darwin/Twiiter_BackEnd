import express from 'express';
import connectDb from './config/database.js';
import apiRoutes from './routes/index.js';
import passport from 'passport';
import { passportAuth } from './config/jtwtMiddleware.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(passport.initialize());
passportAuth(passport)

app.use('/api', apiRoutes);

app.listen(7000, async () => {
  console.log('Server started working at 3000');
  await connectDb();
});
