import express from "express";
import {Login, Register, getUsers, Logout} from "../controllers/authController.js"

const router = express.Router();

router.post("/login", Login);
router.post("/register", Register);
router.get("/getUsers", getUsers)
router.post("/logout", Logout);


export default router;