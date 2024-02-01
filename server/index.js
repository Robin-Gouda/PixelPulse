import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import "dotenv/config";
import AuthRoutes from "./Routes/AuthRoute.js";

//Routes
const app = express();

//Enveronment variables
const port = process.env.DBPORT;
const database = process.env.DATABASE;

//Middleware
app.use(bodyParser.json({ limit: "10mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));

//usage of routes
app.use("/auth", AuthRoutes);

//making a serrver to a perticular port
try {
  mongoose
    .connect(database)
    .then(() => app.listen(port, console.log(`http://localhost:${port}`)));
} catch (error) {
  console.log(error);
}
