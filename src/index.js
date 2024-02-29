import express from "express";
import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
const app = express();
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import { SwaggerTheme } from "swagger-themes";
import fs from "fs";
import morgan from "morgan";

const outputFile = JSON.parse(fs.readFileSync("./swagger_output.json"));
morgan.token("body", (req) => {
  return JSON.stringify(req.body, null, 4);
});
app.use(morgan(":method :url :body"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const theme = new SwaggerTheme();
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(outputFile, {
    explorer: true,
    customCss: theme.getBuffer("dark"),
  })
);

app.get("/", (req, res) => {
  return res.send("Hello World!");
});

const start = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      app.listen(process.env.PORT, () => {
        console.log(
          `listening on port http://localhost:${process.env.PORT} connected to db`
        );
      });
    })
    .catch((err) => console.log(err));
};

start();
