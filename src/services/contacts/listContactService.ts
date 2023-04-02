import { Repository } from "typeorm";
import AppDataSource from "../../data-source";
import { Contacts } from "../../entities/contact.entity,";
import { IContacts } from "../../interfaces/contacts.interfaces";
import { manyContacts } from "../../schemas/contacts/contacts.schemas";

const listContactService = async (): Promise<IContacts> => {
  const contactRepository: Repository<Contacts> =
    AppDataSource.getRepository(Contacts);
  const contacts: Array<Contacts> = await contactRepository.find({
    relations: {
      user: true,
    },
  });

  return contacts;
};

export default listContactService;
