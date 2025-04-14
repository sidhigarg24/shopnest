// import express from 'express';
// import { loginUser,registerUser,adminLogin } from '../controllers/userController.js';

// const userRouter = express.Router();

// userRouter.post('/register',registerUser)
// userRouter.post('/login',loginUser)
// userRouter.post('/admin',adminLogin)

// export default userRouter;

import express from "express";
import {
  loginUser,
  registerUser,
  adminLogin,
  getUserProfile,
  updateUserProfile,
} from "../controllers/userController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.post("/admin", adminLogin);
userRouter.get("/profile", authMiddleware, getUserProfile);
userRouter.put("/profile", authMiddleware, updateUserProfile);

export default userRouter;
