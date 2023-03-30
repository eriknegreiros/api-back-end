import { IUserRequest, IUserResponse } from "../../interfaces/users.interfaces";
import { AppError } from "../../errors";
import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { Repository } from "typeorm";
import { userResponseSchema } from "../../schemas/users/users.schemas";

const createUserService = async (
  userData: IUserRequest
): Promise<IUserResponse> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user: User = userRepository.create(userData);

  const isExistsEmail = await userRepository.findOneBy({
    email: userData.email,
  });

  if (isExistsEmail) {
    throw new AppError(
      "The chosen email is already registered in our system.",
      409
    );
  }

  await userRepository.save(user);

  const newUser = userResponseSchema.parse(user);

  return newUser;
};

export default createUserService;
