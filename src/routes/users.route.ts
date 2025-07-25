import express from "express";
import { UsersController } from "../controller/users.controller";
import asyncHandler from "express-async-handler";
import { celebrate, Segments } from "celebrate";
import { userSchema } from "../models/user.model";

export const userRoutes = express.Router()

userRoutes.get("/users", asyncHandler(UsersController.getAll));
userRoutes.get("/users/:id", asyncHandler(UsersController.getById));
userRoutes.post("/users", celebrate({ [Segments.BODY]: userSchema}), asyncHandler(UsersController.save));
userRoutes.put("/users/:id",celebrate({ [Segments.BODY]: userSchema}), asyncHandler(UsersController.update));
userRoutes.delete("/users/:id", asyncHandler(UsersController.delete));
