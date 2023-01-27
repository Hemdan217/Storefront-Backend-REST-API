CREATE TABLE products (id SERIAL PRIMARY KEY,name VARCHAR(255) NOT NULL, price INTEGER NOT NULL);
CREATE TABLE users(id SERIAL PRIMARY KEY,name VARCHAR(255)  NOT NULL,email VARCHAR(255) UNIQUE NOT NULL,password VARCHAR(255)  NOT NULL,role_id INTEGER DEFAULT 0);
CREATE TABLE cart( id SERIAL PRIMARY KEY,user_id INTEGER REFERENCES users(id),product_id INTEGER REFERENCES products(id),amount INTEGER default 1);
CREATE TABLE orders( id SERIAL PRIMARY KEY,user_id INTEGER REFERENCES users(id),cart_id INTEGER REFERENCES cart(id),ordered_at  Date default now() );

INSERT INTO products (name,price) VALUES ('iPhone 9',402);
INSERT INTO products (name,price) VALUES ('iPhone 10',522);
INSERT INTO products (name,price) VALUES ('iPhone 11',612);
INSERT INTO products (name,price) VALUES ('iPhone X',512);
INSERT INTO products (name,price) VALUES ('Oppa A83',412);