import User from "./../models/userModel";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();

const { TOKEN_SECRET } = process.env;
export const registerUser = async (req: Request, res: Response) => {
  // console.log(req.body);
  try {
    const UserModel = new User();
    const hash = bcrypt.hashSync(req.body.password, 10);
    const newUser = await UserModel.createUser(req.body, hash);
    res.json({
      Status: "success",
      Message: "User created successfully",
    });
  } catch (err) {
    res.status(403).json({
      status: "Failed Register",
      message: "Invalid Data ",
    });
  }
};
export const loginUser = async (req: Request, res: Response) => {
  // console.log(req.body);
  try {
    const UserModel = new User();
    const user = await UserModel.login(req.body.email);
    // console.log(user);
    const isMatch = bcrypt.compareSync(req.body.password, user[0].password);

    if (isMatch) {
      // @ts-ignore
      const token = jwt.sign({ username: user[0] }, TOKEN_SECRET);

      res
        .clearCookie("token")
        .clearCookie("role_id")
        .clearCookie("user_id")
        .cookie("user_id", user[0].id, {
          httpOnly: true,
          secure: false,
        })
        .cookie("token", token, {
          httpOnly: true,
          secure: false,
        });
      if (user[0].role_id) {
        res.cookie("role_id", user[0].role_id, {
          httpOnly: true,
          secure: false,
        });
      }
      res.json({
        status: "Success",
        message: "Token has been signed",
      });
    } else {
      res.json({
        status: "Failed LogIn",
        message: "Invalid Data Email Or Password is Wrong",
      });
    }
  } catch (err) {
    res.status(403).json({
      status: "Failed LogIn",
      message: "Invalid Data Email Or Password is Wrong",
    });
  }
};
