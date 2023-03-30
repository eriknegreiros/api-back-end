import createLoginSchema from "../schemas/login/login.schemas";
import { z } from "zod";

type ILogin = z.infer<typeof createLoginSchema>;

export default ILogin;
