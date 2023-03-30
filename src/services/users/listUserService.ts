import { Repository } from "typeorm";
import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { IUsersMultipple } from "../../interfaces/users.interfaces";
import { usersMultipleUserSchema } from "../../schemas/users/users.schemas";

const listUserService = async (): Promise<IUsersMultipple> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const findUsers: Array<User> = await userRepository.find();

  const users = usersMultipleUserSchema.parse(findUsers);

  return users;
};

export default listUserService;
