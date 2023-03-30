import { Request, Response } from "express";
import ILogin from "../interfaces/login.interfaces";
import createLoginService from "../services/login/createLoginService";
import { instanceToPlain } from "class-transformer";

export const createLoginController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const login = req.body;
  const data = await createLoginService(login);
  return res.json(instanceToPlain(data));
};
