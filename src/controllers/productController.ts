import Product from "./../models/productModel";

import { Request, Response } from "express";

export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const ProductModel = new Product();
    const allProducts = await ProductModel.getAllProducts();
    // console.log(allProducts);
    res.json({
      status: "Success",
      lengthOfproducts: allProducts.length,
      data: allProducts,
    });
  } catch (err) {
    res.json({
      status: 404,
      err: err,
    });
  }
};
export const getProduct = async (req: Request, res: Response) => {
  try {
    const ProductModel = new Product();
    const specificProduct = await ProductModel.getSpecificProduct(
      Number(req.params.id)
    );
    // console.log(specificProduct);
    res.json({
      status: "Success",
      data: specificProduct,
    });
  } catch (err) {
    res.json({
      status: 404,
      err: err,
    });
  }
};
export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const ProductModel = new Product();
    const specificProduct = await ProductModel.deleteProduct(
      Number(req.params.id)
    );
    // console.log(specificProduct);
    res.json({
      stauts: "done",
      message: `The ${specificProduct[0].name} product was deleted`,
    });
  } catch (err) {
    res.json({
      status: 404,
      err: err,
    });
  }
};
export const updateProduct = async (req: Request, res: Response) => {
  try {
    const ProductModel = new Product();
    const updatedProduct = await ProductModel.updateProduct(
      Number(req.params.id),
      Number(req.body.price)
    );
    // console.log(updatedProduct);
    res.json({
      stauts: "done",
      message: `The ${updatedProduct[0].name} product was updated`,
    });
  } catch (err) {
    res.json({
      status: 404,
      err: err,
    });
  }
};
export const createProduct = async (req: Request, res: Response) => {
  // console.log(req.body);
  try {
    const ProductModel = new Product();
    const newProduct = await ProductModel.createProduct(
      req.body.name,
      Number(req.body.price)
    );
    // console.log(newProduct);
    res.json({
      stauts: "done",
      message: `The ${newProduct[0].name} product was added`,
    });
  } catch (err) {
    res.json({
      status: 404,
      err: err,
    });
  }
};
