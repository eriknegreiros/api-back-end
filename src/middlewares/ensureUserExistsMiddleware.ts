import { Request, Response, NextFunction } from "express";
import { Repository } from "typeorm";
import AppDataSource from "../data-source";
import { User } from "../entities/user.entity";
import { AppError } from "../errors";

const ensureUserExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const findUser = await userRepository.findOne({
    where: {
      id: req.params.id,
    },
  });

  if (!findUser) {
    throw new AppError("User not Found", 404);
  }

  return next();
};

export default ensureUserExistsMiddleware;
