import { Repository } from "typeorm";
import AppDataSource from "../../data-source";
import { Contacts } from "../../entities/contact.entity,";
import { User } from "../../entities/user.entity";
import {
  ICreateContactRequest,
  ICreateContactResponse,
} from "../../interfaces/contacts.interfaces";
import { contactResponseSchema } from "../../schemas/contacts/contacts.schemas";

const createContactService = async (
  id: string,
  dataClient: ICreateContactRequest
): Promise<ICreateContactResponse> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);
  const contactRepository: Repository<Contacts> =
    AppDataSource.getRepository(Contacts);

  const user: User | null = await userRepository.findOneBy({
    id: id,
  });

  const contact: Contacts = contactRepository.create({
    ...dataClient,
    user: user!,
  });

  await contactRepository.save(contact);

  const returnContact = contactResponseSchema.parse(contact);

  return returnContact;
};

export default createContactService;
