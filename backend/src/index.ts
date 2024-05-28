import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";

import userRoute from "./routes/userRoute";

const MONGO_DB_CONNECTION_STRING = process.env.MONGO_DB_CONNECTION_STRING;
const PORT = process.env.PORT;

mongoose
  .connect(MONGO_DB_CONNECTION_STRING as string)
  .then(() => console.log("Successful connection to database"))
  .catch((err) => console.error("Unsuccessful connection to database", err));

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/user", userRoute);

app.listen(PORT, () => console.log(`Backend server listening on port ${PORT}`));
