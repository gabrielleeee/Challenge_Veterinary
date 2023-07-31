import { Request, Response, NextFunction } from "express";

const errorHandlerMiddleware = async (err: Error, req: Request, res: Response, next: NextFunction) => {
  console.log(err)
  return res.status(500).json({ msg: 'Something went wrong, try again!' })
}

export default errorHandlerMiddleware;