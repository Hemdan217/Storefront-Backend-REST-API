import express from "express";
import {
  getAllProducts,
  createProduct,
  getProduct,
  updateProduct,
  deleteProduct,
} from "./../controllers/productController";
import { VerifyToken } from "./../middleware/auth";

const productRouter = express();

/// Get All Tours , Or Create New Tour
productRouter.route("/").get(getAllProducts).post(VerifyToken, createProduct);

productRouter
  .route("/:id")
  .get(getProduct)
  .patch(VerifyToken, updateProduct)
  .delete(VerifyToken, deleteProduct);

export default productRouter;
