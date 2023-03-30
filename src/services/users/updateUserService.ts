import { Repository } from "typeorm";
import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { IUserUpdate, IUserResponse } from "../../interfaces/users.interfaces";
import { userResponseSchema } from "../../schemas/users/users.schemas";

const updateUserService = async (
  userData: any,
  id: string
): Promise<IUserResponse> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const oldUserData = await userRepository.findOneBy({
    id: id,
  });

  const user = userRepository.create({
    ...oldUserData,
    ...userData,
  });

  await userRepository.save(user);

  const updateUser = userResponseSchema.parse(user);

  return updateUser;
};

export default updateUserService;
