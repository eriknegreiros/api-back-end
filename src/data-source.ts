import "dotenv/config";
import "reflect-metadata";
import { DataSource, DataSourceOptions } from "typeorm";
import { User } from "./entities/user.entity";
import { Contacts } from "./entities/contact.entity,";
import { createUser1680120556305 } from "./migrations/1680120556305-createUser";

const dataSourceConfig = (): DataSourceOptions => {
  const dbUrl: string | undefined = process.env.DATABASE_URL;

  if (!dbUrl) {
    throw new Error("Env var DATABASE_URL does not exists");
  }

  return {
    type: "postgres",
    url: dbUrl,
    synchronize: false,
    logging: true,
    entities: [User, Contacts],
    migrations: [createUser1680120556305],
  };
};

const AppDataSource = new DataSource(dataSourceConfig());

export default AppDataSource;
