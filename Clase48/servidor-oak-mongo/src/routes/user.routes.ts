import { Router } from "../../depts.ts";
import {findUsers, findUserById, createUser} from "../controllers/user.controller.ts";

export const userRouter = new Router()
.get("/users",findUsers)
.get("/users/:id", findUserById)
.post("/users",createUser)