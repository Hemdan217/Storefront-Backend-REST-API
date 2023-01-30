CREATE TABLE cart( id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id)  ON DELETE CASCADE,
    product_id INTEGER REFERENCES products(id)  ON DELETE CASCADE,
    amount INTEGER default 1);
