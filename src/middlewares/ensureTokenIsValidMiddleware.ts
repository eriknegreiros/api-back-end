import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import "dotenv/config";

const ensureTokenIsValidMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({
      message: "Missing Authorization Token",
    });
  }

  token = token.split(" ")[1];
  jwt.verify(token, process.env.SECRET_KEY as string, (error, decoded: any) => {
    if (error) {
      return res.status(403).json({ message: "Token is invalid." });
    }

    req.user = {
      id: decoded.id,
    };

    return next();
  });
};

export default ensureTokenIsValidMiddleware;
