# Storefront Backend Project

## Getting Started

## Scripts

1. npm run build
2. npm run test
3. npm run start
4. npm run lint

# Database Setup :

I have Used Two databases=>:
1- The Main database is `store` database for production process create it using

```
db-migrate db:create store
```

then using the up migration to create the required tables

```
db-migrate up
```

2- The secondary database is `test` It is created durning the test process and dropped by the end
`db-migrate db:create test && db-migrate --env test up  && npx tsc && cross-env ENV=test jasmine --random=false  && db-migrate db:drop test`
The two database works on port 5432

```

{
  "dev": {
    "driver": "pg",
    "host": "127.0.0.1",
    "database": "store",
    "user": "Hemdan",
    "password": "####"
  },
  "test": {
    "driver": "pg",
    "host": "127.0.0.1",
    "database": "test",
    "user": "Hemdan",
    "password": "##"
  }
}
```

'Environment Variables Used for this project'

POSTGRES_HOST="localhost"
POSTGRES_DB="store"
POSTGRES_USER="###"
POSTGRES_PASSWORD="####"
ENV='dev'
POSTGRES_TEST_DB="test"
TOKEN_SECRET="###"

## brief of usage:

This Project consists of Three endpoints

1. The first endpoint is related to to CRUD Operations on Products  
   1.1 READ

   - To View all products details by sending GET request on (http://127.0.0.1:3000/api/v1/products)
   - To View details for specific product by id sending GET request on(http://127.0.0.1:3000/api/v1/products/{id})

     1.2 CREATE (This is only available for registered users as admin)

   - To add new product details by sending POST request on(http://127.0.0.1:3000/api/v1/products)
   - it Required details for products => name of the product,price

     1.3 Update (This is only available for registered users as admin)

   - To update details for specific product by id by sending PATCH request on(http://127.0.0.1:3000/api/v1/products/{id})

     1.4 Delete (This is only available for registered users as admin)

   - To DELETE specific product by id by sending DELETE request on(http://127.0.0.1:3000/api/v1/products/{id})

2. The Second endpoint is related to Register, Login for Users

   2.1 Register

   - To Register by sending POST request on (http://127.0.0.1:3000/api/v1/register)
   - it Required details for Register Process => name of the user,email,password and role_id
   - role_id=1 for only admin user, It is by default = 0
   - password hashed before saving to database using bcrypt library

     2.2 Log IN

   - To Register by sending POST request on(http://127.0.0.1:3000/api/v1/login)
   - it Required details for Log IN Process => email,password
   - It checks if the user is already registered or not
   - If yes it checks the passwordand then generate token for user account

3. The Second endpoint is related to make orders ,view orders

   3.1 Adding Order

   - To Make Order by sending POST request on (http://127.0.0.1:3000/api/v1/mycart)
   - it Required details for this Process => user must log in,and has token
   - for making this process by send id for product,amout for this product

     3.2 View my Cart

   - To Make Order by sending GET request on (http://127.0.0.1:3000/api/v1/mycart)
   - it Required details for this Process => user must log in,and has token
   - It returns all the orders made by user who logged In
