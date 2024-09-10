import express from "express";
import { logger } from "../utils/logger.js";

const app = express();

app.get("/", (req, res) => {
  // try {
  //sdfsdfsdf
  //sdfsdf
    logger.info("SE REGISTRÓ EL USUARIO");
    res.send("probando logger");
  // } catch (error) {
  //   logger.error(error.message);
  //   throw new Error(error)
  // }
});

const PORT = 8081;

app.listen(PORT, () =>
  logger.info(`Servidor express escuchando en el puerto ${PORT}`)
);
