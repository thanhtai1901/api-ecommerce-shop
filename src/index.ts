import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import connectDatabase from './config/database/database.config';
import usersRouter from './api/users/router/users.router';
dotenv.config();
const app = express();
const PORT = 3000;
app.use(express.json());
connectDatabase();
app.get('/', (req: Request, res: Response) => {
  res.send('taideptrai1901');
});
app.use('/api/v1/users', usersRouter);
app.listen(PORT, () => {
  console.log(`Server đang chạy ${PORT}`);
});
