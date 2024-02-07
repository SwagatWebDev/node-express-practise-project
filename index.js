require('dotenv').config()
const mongoose = require('mongoose');
const express = require('express');
const morgan = require('morgan');
const server = express();
const productRouter = require('./router/product')
const userRouter = require('./router/user')
const baseURL = '/api/v1';
console.log('DB PASSWORD:',process.env.DB_PASSWORD);

//db connection
main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb+srv://swagatmishra:lkQ6cIAeTtyul29m@md-cluster.aifwhrc.mongodb.net/ecommerce');
    console.log('database connected')
}

//bodyParser
server.use(express.json());
server.use(morgan('default'));
server.use(express.static('public'));
server.use(baseURL+'/products',productRouter.router);
server.use(baseURL+'/users',userRouter.router);

// 49.37.114.170/32
//lkQ6cIAeTtyul29m
//mongosh "mongodb+srv://md-cluster.aifwhrc.mongodb.net/" --apiVersion 1 --username swagatmishra

server.listen(process.env.PORT, () => {
    console.log(`Server running on http://localhost:${process.env.PORT}`);
});
