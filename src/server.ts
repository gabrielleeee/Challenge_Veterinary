import { app } from './app';

const PORT = process.env.PORT || 3000

const start = async () => {
    try {
      app.listen(PORT, () => console.log(`Server is listening at the port ${PORT}...`));
    } catch (error) {
      console.log(error);
    }
  };
  
start();