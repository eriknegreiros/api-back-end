import {
  userRequestSchema,
  userResponseSchema,
  usersMultipleUserSchema,
  userUpdateSchema,
} from "../schemas/users/users.schemas";
import { z } from "zod";

type IUserRequest = z.infer<typeof userRequestSchema>;
type IUserResponse = z.infer<typeof userResponseSchema>;
type IUsersMultipple = z.infer<typeof usersMultipleUserSchema>;
type IUserUpdate = z.infer<typeof userUpdateSchema>;

export interface IUserInRequest {
  id: string | undefined;
}

export { IUserRequest, IUserResponse, IUsersMultipple, IUserUpdate };
