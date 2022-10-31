import {Router} from "express";
import {login} from "../controllers/authController.js";

const router = new Router();

router.post("/login", login);

export default router;