import express, { Request, Response } from "express";
require("dotenv").config({ path: require("find-config")(".env") });
// console.log(process.env);
// process.env.POSTGRES_HOST;
import cors from "cors";
import productRouter from "./routes/productRouter";
import userRouter from "./routes/userRouter";
let cookieParser = require("cookie-parser");
const app: express.Application = express();
// set the view engine to ejs
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: process.env.FRONTEND_URL ?? "http://127.0.0.1:3000",
    optionsSuccessStatus: 200,
  })
);
app.use(
  cookieParser({
    credentials: "include",
  })
);
app.use(express.urlencoded({ extended: true }));

app.get("/", function (req: Request, res: Response) {
  // console.log("Cookies: ", req.cookies);
  res.cookie("user", "Hemdan");

  res.render("home");
});
app.get("/api", function (req: Request, res: Response) {
  // console.log("Cookies: ", req.cookies);
  const x = req.cookies;
  res.send(x);
});

app.use("/api/v1/products", productRouter);
app.use("/api/v1/", userRouter);
const { ENV } = process.env;
const port = ENV == "dev" ? 3000 : 3002;
app.listen(port, function () {
  console.log(`starting app on: ${port}`);
});
export default app;
