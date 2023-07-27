import { Request, Response } from "express";

const registerNotFound = (req: Request, res: Response) => res.status(400).json({message: 'Não foi possível encontrar o cadastro!'})

export default registerNotFound;