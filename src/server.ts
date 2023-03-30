import AppDataSource from "./data-source";
import app from "./app";

AppDataSource.initialize()
  .then(async () => {
    console.log("Database connected.");

    app.listen(3000, () => {
      console.log(`Server is Running`);
    });
  })
  .catch((err) => {
    console.error(err);
  });
