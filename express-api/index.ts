import express, { Express, Request, Response } from 'express';
import remindersRouter from './reminders'


const app: Express = express();
const port = process.env.PORT || 8000;

// app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use('/reminders',remindersRouter)

app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
});


app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});