import {
  ICreateContactResponse,
  IUpdateContacts,
} from "../../interfaces/contacts.interfaces";
import AppDataSource from "../../data-source";
import { Contacts } from "../../entities/contact.entity,";
import { contactResponseSchema } from "../../schemas/contacts/contacts.schemas";
import { Repository } from "typeorm";
import { AppError } from "../../errors";

const updateContactService = async (
  userData: any,
  id: string
): Promise<ICreateContactResponse> => {
  const contactRepository: Repository<Contacts> =
    AppDataSource.getRepository(Contacts);

  const oldContactData = await contactRepository.findOneBy({
    id: id,
  });

  if (!oldContactData) {
    throw new AppError("Contact not found", 404);
  }

  await contactRepository.update({ id: id }, userData);

  return Object.assign(oldContactData, userData);
};

export default updateContactService;
