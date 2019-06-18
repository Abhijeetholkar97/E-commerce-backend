// const mysql = require('mysql');
var knex = require('knex')({
    client: 'mysql',
    connection: {
      host : '127.0.0.1',
      user : 'abhijeet',
      password : '1234',
      database : 'e_commerce'
    }
  }, console.log("Database Connected"));
  

  //creating sever for routes
const express = require('express');
const app = express();

// data will be sent in request body
app.use(express.json());


//route for department
var departments = express.Router();
app.use('/departments',departments);
require('./routes/departments')(departments,knex)


  //route for category
var categories = express.Router();
app.use('/categories',categories);
require('./routes/categories')(categories,knex);

//route for  products
var products = express.Router();
app.use('/products',products);
require('./routes/products')(products,knex);




//Server listening

const server = app.listen(3000);
