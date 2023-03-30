import { compare } from "bcrypt";
import jwt from "jsonwebtoken";
import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors";
import ILogin from "../../interfaces/login.interfaces";
import "dotenv/config";
import { Repository } from "typeorm";

const createLoginService = async ({email, password}: ILogin) => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user: User | null = await userRepository.findOneBy({
    email: email,
  });

  if (!user) {
    throw new AppError("Wrong Email or password", 401);
  }

  const passwordMatch = await compare(password, user.password);

  if (!passwordMatch) {
    throw new AppError("Wrong Email or password", 401);
  }

  const token: string = jwt.sign(
    {
      id: user.id,
    },
    process.env.SECRET_KEY!,
    {
      expiresIn: "24h",
      subject: user.id,
    }
  );

  return {token, user} ;
};

export default createLoginService;
