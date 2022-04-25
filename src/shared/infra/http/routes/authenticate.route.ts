import { AuthentcateUserController } from "@modules/accounts/useCases/authenticateUser/AuthenticateUserController";
import { Router } from "express";

const authenticateRoutes = Router();

const authenticateUserController = new AuthentcateUserController();

authenticateRoutes.post("/sessions", authenticateUserController.handle);

export { authenticateRoutes };
