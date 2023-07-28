import { app } from './app';

const PORT = process.env.PORT || 3000

const start = async () => {
    try {
      app.listen(PORT, () => console.log(`Servidor está ouvindo na porta ${PORT}...`));
    } catch (error) {
      console.log(error);
    }
  };
  
start();