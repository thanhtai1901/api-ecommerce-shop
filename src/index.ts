import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
const PORT = 3000;
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('taideptrai1901');
});

app.listen(PORT, () => {
  console.log(`Server đang chạy ${PORT}`);
});
