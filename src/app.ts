import express from 'express';
import tutorRoutes from './routers/tutors';
import petRoutes from './routers/pets';
import errorMiddleware from './middlewares/error-handler';
import notFound from './middlewares/not-found';
import 'dotenv/config'

export const app = express();
app.use(express.json());

app.use('/', tutorRoutes);
app.use('/', petRoutes);

app.use(errorMiddleware);
app.use(notFound);


