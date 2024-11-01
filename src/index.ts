import express, { Request, Response } from 'express';
const app = express();
const port = 3000;
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('taideptrai1901');
});

app.listen(port, () => {
  console.log('hello tai dep trai number 1');
});
