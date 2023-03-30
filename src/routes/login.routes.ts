import { Router } from "express";
import { createLoginController } from "../controllers/login.controllers";
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValidMiddleware";
import createLoginSchema from "../schemas/login/login.schemas";

const loginRoutes: Router = Router()

loginRoutes.post('', ensureDataIsValidMiddleware(createLoginSchema), createLoginController)


export default loginRoutes