import Product from "../models/productModel";
import User from "../models/userModel";

describe("1. Product Model", () => {
  it("1.1 It Should Create New Product ", async () => {
    const newProduct = {
      name: "I Phone 16",
      price: 2510,
    };
    const productModel = new Product();
    const addProduct = await productModel.createProduct(
      newProduct.name,
      newProduct.price
    );
    // @ts-ignore
    expect(addProduct).toEqual([
      Object({ id: 1, name: "I Phone 16", price: 2510 }),
    ]);
  });

  it("1.2 should To get All the Products", async () => {
    const productModel = new Product();
    const allProducts = await productModel.getAllProducts();
    expect(allProducts).toEqual([
      Object({ id: 1, name: "I Phone 16", price: 2510 }),
    ]);
  });
  it("1.3 should To Update The Product Details", async () => {
    const productModel = new Product();
    const updatedProduct = await productModel.updateProduct(1, 45);
    expect(updatedProduct).toEqual([{ id: 1, name: "I Phone 16", price: 45 }]);
  });

  it("1.4 should To get Product Details", async () => {
    const productModel = new Product();
    const specificProduct = await productModel.getSpecificProduct(1);
    expect(specificProduct).toEqual([{ id: 1, name: "I Phone 16", price: 45 }]);
  });

  it("1.5 should  Delete The Product Details", async () => {
    const productModel = new Product();
    const specificProduct = await productModel.deleteProduct(1);
    expect(specificProduct).toEqual([{ id: 1, name: "I Phone 16", price: 45 }]);
  });

  it("1.6 should To get All the Products as Empty", async () => {
    const productModel = new Product();
    const allProducts = await productModel.getAllProducts();
    expect(allProducts).toEqual([]);
  });
});

describe("2. User Model", () => {
  it("2.1 should have an Function To register", async () => {
    const payload = {
      name: "Hemdan213",
      email: `He21@gmail.com`,
      password: "12345",
      role_id: 0,
    };
    const userModel = new User();
    const newUser = await userModel.createUser(payload);
    expect(newUser).toEqual([
      {
        // @ts-ignore
        id: 1,
        name: "Hemdan213",
        email: "He21@gmail.com",
        password: "12345",
        role_id: 0,
      },
    ]);
  });
  it("2.2 should have an Function To Log In", async () => {
    const payload = {
      email: `He21@gmail.com`,
      password: "12345",
    };
    const userModel = new User();
    const logged = await userModel.login(payload.email);
    expect(logged).toEqual([
      {
        id: 1,
        name: "Hemdan213",
        email: "He21@gmail.com",
        password: "12345",
        role_id: 0,
      },
    ]);
  });
});
