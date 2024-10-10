import express from "express";
import { dbConnection } from "./config/db.connection";
import config from "./config/config";
import { logger } from "./logs/logger";
import { errorHandler } from "./middlewares/error.handler";
import productRouter from './routes/product.router'

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

dbConnection()
  .then(() => logger.info("conectado a la db"))
  .catch((error) => logger.error(error));

app.use('/api/products', productRouter)

//@ts-ignore
app.use(errorHandler)

const PORT = config.PORT;

app.listen(PORT, () => logger.info(`app ok puerto ${PORT}`));
