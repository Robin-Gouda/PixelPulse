import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import "dotenv/config";
import AuthRoute from "./Routes/AuthRoute.js";
import UserRoute from "./Routes/UserRoute.js";
import PostRoute from "./Routes/PostRoute.js";

//Routes
const app = express();

//Enveronment variables
const port = process.env.DBPORT || 5001;
const database = process.env.DATABASE;

//Middleware
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));

mongoose
  .connect(database)
  .then(() => app.listen(port, () => console.log(`http://localhost:${port}`)))
  .catch((error) => console.log(error));

//usage of routes
app.use("/auth", AuthRoute);
app.use("/user", UserRoute);
app.use("/post", PostRoute);
