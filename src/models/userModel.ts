// @ts-ignore
import client, { UserSchema } from "./dbConnect";

class User {
  async createUser(
    user: UserSchema,
    hashPassword: string
  ): Promise<UserSchema[]> {
    try {
      const conn = await client.connect();
      const sql =
        "INSERT INTO users(name,email,password,role_id) VALUES($1,$2,$3,$4) RETURNING *;";
      // @ts-ignore
      const result = await conn.query(sql, [
        // @ts-ignore
        user.name,
        // @ts-ignore
        user.email,
        // @ts-ignore
        hashPassword,
        user.role_id || 0,
      ]);

      conn.release();

      return result.rows;
    } catch (e) {
      throw new Error(`Can't Register . Error: ${e}`);
    }
  }
  async login(email: string): Promise<UserSchema[]> {
    try {
      const conn = await client.connect();
      const sql = "SELECT * FROM users where email=($1);";
      // @ts-ignore
      const result = await conn.query(sql, [email]);

      conn.release();

      return result.rows;
    } catch (e) {
      throw new Error(`Can't Login . Error: ${e}`);
    }
  }
}

export default User;
