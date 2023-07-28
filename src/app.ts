import express from 'express';
import tutorRoutes from './routers/tutors';
import errorMiddleware from './middlewares/error-handler';
import notFound from './middlewares/not-found';
import 'dotenv/config'

export const app = express();
app.use(express.json());

app.use('/', tutorRoutes);

app.use(errorMiddleware);
app.use(notFound);

