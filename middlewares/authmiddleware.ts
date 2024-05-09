
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import jwtConfig from "../config/jwtconfig";



declare global {
    namespace Express {
      interface Request {
        user?: any;
      }
    }
  }


export const authenticateToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.header('Authorization');
  if (!token) return res.status(401).send('Access Denied');

  try {
    const decoded = jwt.verify(token, jwtConfig.secret);
    req['user'] = decoded;
    next();
  } catch (err) {
    res.status(400).send('Invalid Token');
  }
};

export const authorizeAdmin = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = req['user'];
  if (!user || user.role !== 'admin') {
    return res.status(403).send('Forbidden');
  }
  next();
};
