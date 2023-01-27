import { Pool } from "pg";
import dotenv from "dotenv";
dotenv.config();

dotenv.config();
const {
  POSTGRES_HOST,
  POSTGRES_DB,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  ENV,
  testingDB,
} = process.env;

let client;
if (ENV == "test") {
  client = new Pool({
    host: POSTGRES_HOST,
    database: testingDB,
    user: POSTGRES_USER,
    password: POSTGRES_PASSWORD,
  });
}

if (ENV == "dev") {
  client = new Pool({
    host: POSTGRES_HOST,
    database: POSTGRES_DB,
    user: POSTGRES_USER,
    password: POSTGRES_PASSWORD,
  });
}

export default client as Pool;
export type ProductSchema = {
  id?: number;
  name: string;
  price: number;
};
export type UserSchema = {
  id?: number;
  name: string;
  email: string;
  password: string;
  role_id: number;
};
export type orderSchema = {
  id?: number;
  user_id: number;
  cart_id: number;
  order_at?: Date;
};
export type cartSchema = {
  id?: number;
  product_id: number;
  user_id: number;
  count: number;
};
