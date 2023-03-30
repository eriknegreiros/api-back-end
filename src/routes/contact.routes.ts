import { Router } from "express";
import {
  createContactController,
  deleteContactController,
  listContactByUserController,
  listContactController,
  updateContactController,
} from "../controllers/contact.controllers";
import ensureTokenIsValidMiddleware from "../middlewares/ensureTokenIsValidMiddleware";
import ensureUserExistsMiddleware from "../middlewares/ensureUserExistsMiddleware";

const contactRoutes: Router = Router();

contactRoutes.post("", ensureTokenIsValidMiddleware, createContactController);
contactRoutes.get("", ensureTokenIsValidMiddleware, listContactController);
contactRoutes.get(
  "/users/:id",
  ensureUserExistsMiddleware,
  ensureTokenIsValidMiddleware,
  listContactByUserController
);
contactRoutes.delete(
  "/:id",
  ensureTokenIsValidMiddleware,
  deleteContactController
);
contactRoutes.patch(
  "/:id",
  ensureTokenIsValidMiddleware,
  updateContactController
);

export default contactRoutes;
