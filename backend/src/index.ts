import express, { type Express, type Request, type Response } from 'express';
const app: Express = express();
const port: number = 5000;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World from TypeScript and Express!');
});

app.get('/health', (req: Request, res: Response) => {
  res.send('OK!');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
