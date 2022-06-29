import express from "express";

import { user, story } from "./components";
import cors from "cors";

export const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/user", user);
app.use("/story", story);