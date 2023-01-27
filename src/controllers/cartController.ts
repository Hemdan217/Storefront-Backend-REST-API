import Cart from "./../models/cartModel";
import { Request, Response } from "express";

export const addMyCart = async (req: Request, res: Response) => {
  // console.log(req.body);
  try {
    const cartModel = new Cart();
    const { product_id, amount } = req.body;
    const newOrder = await cartModel.addOrder(
      req.cookies.user_id,
      product_id,
      amount
    );
    res.json({
      Status: "success",
      Message: "User made Order successfully",
    });
  } catch (err) {
    res.json({
      Status: "Fail",
      Message: "We Are Sorry For Mistake Please Make ",
      Error: err,
    });
  }
};
export const getMyCart = async (req: Request, res: Response) => {
  // console.log(req.body);
  try {
    const cartModel = new Cart();
    const myOrders = await cartModel.returnOrders(req.cookies.user_id);
    res.json({
      Status: "success",
      Message: "The Orders Made By You",
      Data: myOrders,
    });
  } catch (err) {
    res.json({
      Status: "Fail",
      Message: "We Are Sorry For Mistake Please Make ",
      Error: err,
    });
  }
};
