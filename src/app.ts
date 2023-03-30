import "reflect-metadata";
import "express-async-errors";
import { handleErrors } from "./errors";
import express from "express";
import userRoutes from "./routes/users.routes";
import loginRoutes from "./routes/login.routes";
import contactRoutes from "./routes/contact.routes";

const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

app.use("", userRoutes);
app.use("/login", loginRoutes);
app.use("/contacts", contactRoutes);

app.use(handleErrors);
export default app;
