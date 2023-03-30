import { z } from "zod";
import { hashSync } from "bcrypt";

const userRequestSchema = z.object({
  name: z.string().max(130),
  email: z.string().email(),
  password: z
    .string()
    .max(120)
    .transform((pass) => {
      return hashSync(pass, 10);
    }),
  telephone: z.string().max(20),
});

const userResponseSchema = userRequestSchema
  .extend({
    id: z.string(),
    createdAt: z.date(),
  })
  .omit({ password: true });

const usersMultipleUserSchema = userResponseSchema.array();

const userUpdateSchema = userResponseSchema.partial();

export {
  userRequestSchema,
  userResponseSchema,
  usersMultipleUserSchema,
  userUpdateSchema,
};
