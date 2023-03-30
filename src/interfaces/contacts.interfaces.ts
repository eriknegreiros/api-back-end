import {
  contactRequestSchema,
  contactResponseSchema,
  manyContacts,
  returnContactsByUserSchema,
  contactUpdateSchema,
} from "../schemas/contacts/contacts.schemas";
import { z } from "zod";

type ICreateContactRequest = z.infer<typeof contactRequestSchema>;

type ICreateContactResponse = z.infer<typeof contactResponseSchema>;

type IContacts = z.infer<typeof manyContacts>;

type IContactsByUser = z.infer<typeof returnContactsByUserSchema>;

type IUpdateContacts = z.infer<typeof contactUpdateSchema>;

export {
  ICreateContactRequest,
  ICreateContactResponse,
  IContacts,
  IContactsByUser,
  IUpdateContacts,
};
