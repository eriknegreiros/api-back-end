import { Repository } from "typeorm";
import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { IContactsByUser } from "../../interfaces/contacts.interfaces";
import { returnContactsByUserSchema } from "../../schemas/contacts/contacts.schemas";

const listContactByUserService = async (
  id: string
): Promise<IContactsByUser> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user = await userRepository.findOne({
    where: {
      id: id,
    },
    relations: {
      contacts: true,
    },
  });

  const returnPosts = returnContactsByUserSchema.parse(user!);

  return returnPosts;
};

export default listContactByUserService;
