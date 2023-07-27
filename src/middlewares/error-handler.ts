import { Request, Response, NextFunction } from "express";

const errorHandlerMiddleware = async (err: Error, req: Request, res: Response, next: NextFunction) => {
  console.log(err)
  return res.status(500).json({ msg: 'Algo de errado ocorreu, tente novamente!' })
}

export default errorHandlerMiddleware;