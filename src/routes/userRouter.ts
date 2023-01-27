import express from "express";
import { registerUser, loginUser } from "./../controllers/userController";
import { addMyCart, getMyCart } from "./../controllers/cartController";
import { VerifyTokenOnly } from "./../middleware/auth";

const userRouter = express.Router();

/// Get All Tours , Or Create New Tour
userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.post("/mycart", VerifyTokenOnly, addMyCart);
userRouter.get("/mycart", VerifyTokenOnly, getMyCart);

userRouter;

export default userRouter;
