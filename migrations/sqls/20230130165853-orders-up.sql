CREATE TABLE orders( id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id)  ON DELETE CASCADE,
    cart_id INTEGER REFERENCES cart(id)  ON DELETE CASCADE, 
    ordered_at  Date default now() );

