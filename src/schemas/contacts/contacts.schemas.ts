import { z } from "zod";
import { userResponseSchema } from "../users/users.schemas";

const contactRequestSchema = z.object({
  name: z.string().max(130),
  email: z.string().email(),
  telephone: z.string().max(20),
});

const contactResponseSchema = contactRequestSchema.extend({
  id: z.string(),
  createdAt: z.date(),
  user: userResponseSchema,
});

const manyContacts = contactResponseSchema.array();

const manyContactsByUserSchema = contactResponseSchema
  .omit({
    user: true,
  })
  .array();

const returnContactsByUserSchema = userResponseSchema.extend({
  contacts: manyContactsByUserSchema,
});

const contactUpdateSchema = contactRequestSchema.partial();

export {
  contactRequestSchema,
  contactResponseSchema,
  manyContacts,
  returnContactsByUserSchema,
  contactUpdateSchema,
  manyContactsByUserSchema,
};
