import express from 'express';
import errorMiddleware from './middlewares/error-handler';
import notFound from './middlewares/not-found';

const app = express();
app.use(express.json());

//middlewares
app.use(errorMiddleware);
app.use(notFound);

//Configuração da porta
const PORT = process.env.PORT || 3000

// Inicia o sevidor
const start = async () => {
    try {
      app.listen(PORT, () => console.log(`Servidor está ouvindo na porta ${PORT}...`));
    } catch (error) {
      console.log(error);
    }
  };
  
  start();