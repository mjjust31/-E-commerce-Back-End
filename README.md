# E-commerce Back End Starter Code

## Recording Link:

## Description

Working the sequelize, this project was used to implement data tables for categories, product, product tags, and tags to learn about the relationship between the tables. By creating the tables, the routes were also built to be able to pull relative information between the products, tags, and categories while working in the backend.

AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies

## Installation

npm i:
"dotenv": "^8.2.0",
"express": "^4.17.1",
"mysql2": "^2.1.0",
"sequelize": "^5.21.7"

## Usage

The user first needs to seed the given data by running "npm run seed". After seeding the inital data, run "npm start" for the backend application to work. The user that will be able to use the relative CRUD routes: 

Categories:
Get All: http://localhost:3001/api/categories
Get One: http://localhost:3001/api/categories/1 (example as this is based on id)
Post One: http://localhost:3001/api/categories
Put One: http://localhost:3001/api/categories/1 (example as this is based on id)
Delete: http://localhost:3001/api/categories/1 (example as this is based on id)

Product:
Get All: http://localhost:3001/api/products
Get One: http://localhost:3001/api/products/1 (example as this is based on id)
Post One: http://localhost:3001/api/products
Put One: http://localhost:3001/api/products/1 (example as this is based on id)
Delete: http://localhost:3001/api/products/1 (example as this is based on id)

Tag: 
Get All: http://localhost:3001/api/tags
Get One: http://localhost:3001/api/tags/1 (example as this is based on id)
Post One: http://localhost:3001/api/tags
Put One: http://localhost:3001/api/tags/1 (example as this is based on id)
Delete: http://localhost:3001/api/tags/1 (example as this is based on id)


## License

    This project is licensed under the ([![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)) license. Click [here]([License](https://opensource.org/licenses/MIT)) for more information.

## Questions

For any questions, please contact me at mj.justmann@gmail.com.

## Resources used for the project:

1. NU BootCamp curriculum
2. Sequelize documentation: https://sequelize.org/docs/v6/core-concepts/model-basics/
3. Relationship videos: https://www.youtube.com/watch?v=lAtCySGDD48, https://www.youtube.com/watch?v=eqhffa6ykF0

While in the creation of the product, althought the example does not require the "category" column, I included it in my prodcut table as a requirement for cleaner data collection of new products.
