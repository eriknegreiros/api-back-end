import { Repository } from "typeorm";
import AppDataSource from "../../data-source";
import { Contacts } from "../../entities/contact.entity,";
import { AppError } from "../../errors";

const deleteContactService = async (
  id: string,
  id_user: string
): Promise<void> => {
  const contactRepository: Repository<Contacts> =
    AppDataSource.getRepository(Contacts);
  const findContact = await contactRepository.find({
    where: {
      id: id,
    },
    relations: {
      user: true,
    },
  });
  if (!findContact) {
    throw new AppError("Contact not found", 404);
  }

  if (findContact[0].user.id != id_user) {
    throw new AppError(
      "You are not the owner of this contact, there is no way for you to delete it.",
      401
    );
  }

  await contactRepository.delete(id);
};

export default deleteContactService;
