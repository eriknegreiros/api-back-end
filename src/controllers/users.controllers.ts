import { Request, Response } from "express";
import { instanceToPlain } from "class-transformer";
import { IUserRequest, IUserResponse } from "../interfaces/users.interfaces";
import createUserService from "../services/users/createUserService";
import listUserService from "../services/users/listUserService";
import deleteUserService from "../services/users/deleteUserService";
import updateUserService from "../services/users/updateUserService";

export const createUserController = async (req: Request, res: Response) => {
  const user: IUserRequest = req.body;
  const newUser = await createUserService(user);
  return res.status(201).json(newUser);
};

export const listUserController = async (req: Request, res: Response) => {
  const users = await listUserService();
  return res.status(200).json(users);
};

export const updateUserController = async (req: Request, res: Response) => {
  const userData = req.body;
  const idUser = req.params.id;
  const updateUser = await updateUserService(userData, idUser);
  return res.status(201).json(updateUser);
};

export const deleteUserController = async (req: Request, res: Response) => {
  await deleteUserService(req.params.id);
  return res.status(204).send();
};
