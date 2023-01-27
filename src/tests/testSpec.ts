import Product from "./../models/productModel";
import User from "./../models/userModel";
import Cart from "./../models/cartModel";
const productModel = new Product();
const userModel = new User();
const cartModel = new Cart();

describe("1. Product Model", () => {
  it("1.1 should have Function To get All the Products", () => {
    expect(productModel.getAllProducts).toBeDefined();
  });
  it("1.2 should have Function To get Product Details", () => {
    expect(productModel.getSpecificProduct).toBeDefined();
  });
  it("1.3 should have Function To Create  New Product Details", () => {
    expect(productModel.createProduct).toBeDefined();
  });
  it("1.4 should have Function To Update The Product Details", () => {
    expect(productModel.updateProduct).toBeDefined();
  });
  it("1.5 should have Function To Delete The Product Details", () => {
    expect(productModel.deleteProduct).toBeDefined();
  });
});

describe("2. User Model", () => {
  it("2.1 should have an Function To register", () => {
    expect(userModel.createUser).toBeDefined();
  });
  it("2.2 should have an Function To Log In", () => {
    expect(userModel.login).toBeDefined();
  });
});
describe("3. Cart Model", () => {
  it("3.1 Should Have function to make Order", () => {
    expect(cartModel.addOrder).toBeDefined();
  });
  it("3.2 Should Have function to Get All Orders Details", () => {
    expect(cartModel.returnOrders).toBeDefined();
  });
});
