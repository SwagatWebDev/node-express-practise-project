const fs = require('fs');
const index = fs.readFileSync('index.html', 'utf-8');
const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
const products = data.products;

const express = require('express');
const morgan = require('morgan');
const server = express();

//bodyParser
server.use(express.json());
server.use(morgan('default'))
server.use(express.static('public'));

const port = 8000;




// API - Endpoint - Route

// Products
// API ROOT , base URL, example - google.com/api/v2/

// Read GET /products
server.get('/products', (req, res) => {
    res.json(products);
});

// Read GET /products/:id
server.get('/products/:id', (req, res) => {
    const id = +req.params.id;
    const product = products.find(p=>p.id===id)
    res.json(product);
});

//Create POST /products     C R U D
server.post('/products', (req, res) => {
    console.log(req.body);
    products.push(req.body);
    res.status(201).json(req.body);
});

// Update PUT /products/:id
server.put('/products/:id', (req, res) => {
    const id = +req.params.id;
    const productIndex = products.findIndex(p=>p.id===id)
    products.splice(productIndex,1,{...req.body, id:id})
    res.status(201).json();
});


// Update PATCH /products/:id
server.patch('/products/:id', (req, res) => {
    const id = +req.params.id;
    const productIndex = products.findIndex(p=>p.id===id)
    const product = products[productIndex];
    products.splice(productIndex,1,{...product,...req.body})
    res.status(201).json();
});

// Difference of Patch here whatever dat you want to update those will be updated other data will not affect
// PUT will reformat your data depends on your payload

// Delete DELETE /products/:id
server.delete('/products/:id', (req, res) => {
    const id = +req.params.id;
    const productIndex = products.findIndex(p=>p.id===id)
    const product = products[productIndex];
    products.splice(productIndex,1)
    res.status(201).json(product);
});

;

server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
