import { Router } from "express";
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValidMiddleware";
import { userRequestSchema, userUpdateSchema } from "../schemas/users/users.schemas";
import { createUserController, deleteUserController, listUserController, updateUserController, getUserController } from "../controllers/users.controllers";
import ensureUserExistsMiddleware from "../middlewares/ensureUserExistsMiddleware";
import ensureTokenIsValidMiddleware from "../middlewares/ensureTokenIsValidMiddleware";

 const userRoutes: Router = Router()

userRoutes.post('/register', ensureDataIsValidMiddleware(userRequestSchema), createUserController)
userRoutes.get('/users', listUserController)
userRoutes.get('/users/profile', ensureTokenIsValidMiddleware, getUserController )
userRoutes.delete('/users/:id', ensureUserExistsMiddleware, deleteUserController)
userRoutes.patch('/users/:id', ensureDataIsValidMiddleware(userUpdateSchema), ensureUserExistsMiddleware, updateUserController)


 export default userRoutes