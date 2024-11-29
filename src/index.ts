import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import connectDatabase from './config/database/database.config';
// import usersRouter from './api/users/router/users.router';
// import menusRouter from './api/menus/router/menus.router';
// import categoriesRouter from './api/categories/router/categories.router';
import connectRedis from './config/redis/redis.config';
import setupSwagger from './config/swagger/swagger.config';
import path = require('path');
dotenv.config();
const app = express();
const PORT = 3000;
app.use(express.json());
setupSwagger(app);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));
connectDatabase();
connectRedis();
app.get('/', (req: Request, res: Response) => {
  res.send('taideptrai1901');
});
// app.use('/api/v1/users', usersRouter);
// app.use('/api/v1/menus', menusRouter);
// app.use('/api/v1/categories', categoriesRouter);
app.listen(PORT, () => {
  console.log(`Server đang chạy ${PORT}`);
});
