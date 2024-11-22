import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import connectDatabase from './config/database/database.config';
import usersRouter from './api/users/router/users.router';
import menusRouter from './api/menus/router/menus.router';
import categoriesRouter from './api/categories/router/categories.router';
import connectRedis from './config/redis/redis.config';
dotenv.config();
const app = express();
const PORT = 3000;
app.use(express.json());
connectDatabase();
connectRedis();
app.get('/', (req: Request, res: Response) => {
  res.send('taideptrai1901');
});
app.use('/api/v1/users', usersRouter);
app.use('/api/v1/menus', menusRouter);
app.use('/api/v1/categories', categoriesRouter);
app.listen(PORT, () => {
  console.log(`Server đang chạy ${PORT}`);
});
