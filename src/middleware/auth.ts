import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import { Request, Response } from "express";

dotenv.config();
const { TOKEN_SECRET } = process.env;

// };
export const VerifyToken = async (req: Request, res: Response, next: any) => {
  if (!req.cookies.token || !req.cookies.role_id) {
    return res.status(403).json({
      status: "fail",
      message: "Access Denied please Login In firsr as Admin",
    });
  } else {
    try {
      const token = await req.cookies.token;
      // @ts-ignore
      const data = jwt.verify(token, TOKEN_SECRET);
      // console.log(
      //   JSON.parse(Buffer.from(token.split(".")[1], "base64").toString())
      // );
      // console.log(data);
      next();
    } catch (error) {
      res.status(403).send("Access Denied");
    }
  }
};
export const VerifyTokenOnly = async (
  req: Request,
  res: Response,
  next: any
) => {
  if (!req.cookies.token) {
    return res.status(403).json({
      status: "fail",
      message: "Access Denied please Login In first ",
    });
  } else {
    try {
      const token = await req.cookies.token;
      // @ts-ignore
      const data = jwt.verify(token, TOKEN_SECRET);
      console.log(data);
      // console.log(
      //   JSON.parse(Buffer.from(token.split(".")[1], "base64").toString()["id"])
      // );
      next();
    } catch (error) {
      res.status(403).send("Access Denied");
    }
  }
};
