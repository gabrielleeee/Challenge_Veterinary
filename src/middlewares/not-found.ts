import { Request, Response } from "express";

const notFound = (req: Request, res: Response) => res.status(404).send('Está rota não existe!')

export default notFound;