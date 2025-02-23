import express from "express";
import { getUser, login, signupController } from "../controllers/userController.js";
import verifyToken from "../middlewares/verifyToken.js";

const router = express.Router()
 router.post("/signup" , signupController)
 router.post("/login" , login)
 router.get("/getuser" ,verifyToken, getUser)

export default router;