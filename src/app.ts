import express from 'express';
import { config } from "dotenv";
import morgan from 'morgan';
import appRouter from './routes/index.js';
config();
const app = express();

//remove from production!
app.use(morgan("dev"));

//middleware
app.use(express.json());
app.use("/api/v1", appRouter);

export default app;