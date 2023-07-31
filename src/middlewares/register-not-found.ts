import { Request, Response } from "express";

const registerNotFound = (req: Request, res: Response) => res.status(400).json({message: 'Registration could not be found!'})

export default registerNotFound;