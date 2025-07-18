import express from "express";
import asyncHandler from "express-async-handler";
import { AuthController } from "../controller/auth.controller";
import { celebrate, Segments } from "celebrate";
import { authLoginSchema } from "../models/user.model";

export const authRoutes = express.Router();

authRoutes.post(
  "/auth/login",
  celebrate({ [Segments.BODY]: authLoginSchema }),
  asyncHandler(AuthController.login)
);
