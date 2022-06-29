import { Router } from "express";
import * as controller from "./controller";

const testRouter = Router();

testRouter.route("/").get(controller.index);
testRouter.route("/store").post(controller.store);
testRouter.route("/login").post(controller.login);
testRouter.route("/callback").post(controller.callback);

export default testRouter;
