import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => console.log("mongodb connected"))
  .catch((err) => {
    console.log(err);
  });
const app = express();
const PORT = 3000;

app.listen(PORT, () => console.log(`server running on port ${PORT}`));
