// @ts-ignore
import client, { cartSchema, orderSchema } from "./dbConnect";

class Cart {
  async addOrder(
    user_id: number,
    product_id: number,
    amount: number
  ): Promise<orderSchema[]> {
    try {
      const conn = await client.connect();
      const sqlCart =
        "INSERT INTO cart(user_id,product_id,amount) VALUES($1,$2,$3) RETURNING  id; ";
      const resultCart = await conn.query(sqlCart, [
        user_id * 1,
        product_id * 1,
        amount * 1 || 1,
      ]);
      console.log(resultCart.rows);
      const sqlOrder =
        "INSERT INTO orders(user_id,cart_id) VALUES($1,$2) RETURNING  *; ";
      // @ts-ignore
      const resultOrder = await conn.query(sqlOrder, [
        // @ts-ignore
        user_id * 1,
        resultCart.rows[0].id,
      ]);
      console.log(resultOrder.rows);
      conn.release();

      return resultOrder.rows;
    } catch (e) {
      throw new Error(`Can't Make Order  . Error: ${e}`);
    }
  }
  async returnOrders(user_id: number): Promise<orderSchema[]> {
    try {
      const conn = await client.connect();
      const sql =
        "SELECT  distinct(products.name),products.price as price,cart.amount FROM users JOIN cart ON cart.user_id = ($1)  JOIN products ON cart.product_id =products.id ; ;";
      // @ts-ignore
      const result = await conn.query(sql, [user_id * 1]);

      conn.release();

      return result.rows;
    } catch (e) {
      throw new Error(`Can't Login . Error: ${e}`);
    }
  }
}

export default Cart;
// SELECT name as Product_name,SUM (amount) as Amount,foo.price from ( SELECT orders.id, products.name,products.price as price,cart.amount FROM orders JOIN users On orders.user_id = 3 JOIN cart ON cart.user_id = 3  JOIN products ON cart.product_id =products.id ) As Foo  GROUP BY (name,price);
// SELECT name as Product_name,price,SUM (amount) as Amount,( price* Amount) as Total  from ( SELECT orders.id, products.name,products.price as price,cart.amount FROM orders JOIN users On orders.user_id = 3 JOIN cart ON cart.user_id = 3  JOIN products ON cart.product_id =products.id ) As Foo  GROUP BY name;
