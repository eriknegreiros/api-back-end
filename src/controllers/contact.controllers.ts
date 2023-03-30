import { Request, Response } from "express";
import { ICreateContactRequest } from "../interfaces/contacts.interfaces";
import createContactService from "../services/contacts/createContactService";
import deleteContactService from "../services/contacts/deleteContactService";
import listContactByUserService from "../services/contacts/listContactByUserService";
import listContactService from "../services/contacts/listContactService";
import updateContactService from "../services/contacts/updateContactService";

export const createContactController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const idUser: string = req.user.id;
  const contactData: ICreateContactRequest = req.body;

  const newContact = await createContactService(idUser, contactData);

  return res.status(201).json(newContact);
};

export const listContactController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const contacts = await listContactService();

  return res.status(200).json(contacts);
};

export const listContactByUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userId: string = req.params.id;
  const contacts = await listContactByUserService(userId);

  return res.status(200).json(contacts);
};

export const deleteContactController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { id } = req.params;
  const id_user = req.user.id;
  await deleteContactService(id, id_user);

  return res.status(204).send();
};

export const updateContactController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const contactData = req.body;
  const id = req.params.id;
  const updatedContact = await updateContactService(contactData, id);
  return res.status(200).json(updatedContact);
};
