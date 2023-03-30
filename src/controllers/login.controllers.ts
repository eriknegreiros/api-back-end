import { Request, Response } from "express";
import ILogin from "../interfaces/login.interfaces";
import createLoginService from "../services/login/createLoginService";

export const createLoginController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const loginData: ILogin = req.body;

  const token = await createLoginService(loginData);

  return res.status(201).json({
    token: token,
  });
};