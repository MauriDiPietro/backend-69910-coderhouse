import express from "express";
import { errorHandler } from "./errorHandler.js";
import httpResponse from "./http.response.js";

const app = express();

app.use(express.json());

app.get("/products", (req, res, next) => {
//   array = [];
const array = [{name: 'juan'}]
  try {
    if (array.length === 0) return httpResponse.NotFound(res, "No data");
    return httpResponse.Ok(res, array);
  } catch (error) {
    next(error);
  }
});

app.use(errorHandler);

app.listen(8080, () => {
  console.log("🚀 Server listening on port 8080");
});
