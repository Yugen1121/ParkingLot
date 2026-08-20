import express, {Request, Response} from 'express';
import authRouter from './routes/authRoute';

const app  = express();
const PORT = 8000;

app.use(express.json())


app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to my TypeScript Express server!');
});

app.use("/auth", authRouter)

app.get("/hello/:name", (req: Request, res: Response) => {
    const name = req.params.name;
    return res.send(`Hello, ${name}`);
});

app.listen(PORT, () => {
    console.log("Server is running")
})