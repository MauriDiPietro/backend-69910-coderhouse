import mongoose from "mongoose";
import config from "./config.js";

let MONGO_URL = config.MONGO_URL;

try {
  await mongoose.connect(MONGO_URL);
  console.log("Conectado a la base de datos de MongoDB");
} catch (error) {
  console.log(`ERROR => ${error}`);
}

