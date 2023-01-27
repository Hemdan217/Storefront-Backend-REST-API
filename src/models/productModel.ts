// @ts-ignore
import client, { ProductSchema } from "./dbConnect";

class Product {
  async getAllProducts(): Promise<ProductSchema[]> {
    try {
      const conn = await client.connect();
      const sql = "SELECT * FROM products;";

      const result = await conn.query(sql);

      conn.release();

      return result.rows;
    } catch (err) {
      throw new Error(`Can't Get the products . Error: ${err}`);
    }
  }

  async getSpecificProduct(id: string): Promise<ProductSchema[]> {
    try {
      const conn = await client.connect();
      const sql = "SELECT * FROM products WHERE id=($1);";

      const result = await conn.query(sql, [id]);

      conn.release();

      return result.rows;
    } catch (e) {
      throw new Error(`Can't Find The Product . Error: ${e}`);
    }
  }
  async createProduct(name: string, price: number): Promise<ProductSchema[]> {
    try {
      const conn = await client.connect();
      const sql = "INSERT INTO products(name,price) VALUES($1,$2) RETURNING *;";
      // @ts-ignore
      const result = await conn.query(sql, [name, Number(price)]);

      conn.release();

      return result.rows;
    } catch (e) {
      throw new Error(`Can't Add Product . Error: ${e}`);
    }
  }
  async updateProduct(id: string, price: number): Promise<ProductSchema[]> {
    try {
      const conn = await client.connect();
      const sql = "UPDATE products SET price=($1) WHERE id=($2)  RETURNING *;";

      const result = await conn.query(sql, [Number(price), id]);

      conn.release();

      return result.rows;
    } catch (e) {
      throw new Error(`Can't Update Product . Error: ${e}`);
    }
  }
  async deleteProduct(id: string): Promise<ProductSchema[]> {
    try {
      const conn = await client.connect();
      const sql = "DELETE FROM products WHERE id=($1)  RETURNING *;";

      const result = await conn.query(sql, [id]);

      conn.release();

      return result.rows;
    } catch (e) {
      throw new Error(`Can't Delete Product . Error: ${e}`);
    }
  }
}

export default Product;
