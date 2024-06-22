import express from 'express';
import { dbConnection } from './config/db.connection';
import { errorHandler } from './middlewares/error.handler';
import apiRouter from './routes/index';

const app = express();

app.use(express.json());

const PORT = 8080;

dbConnection().then(() => console.log('Connect to MongoDB')).catch((error)=>console.log(error))

app.use('/api', apiRouter);

app.use(errorHandler);

app.listen(PORT, ()=>{
    console.log(`Server OK on port: ${PORT}`);
})



