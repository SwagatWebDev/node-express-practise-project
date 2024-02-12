require('dotenv').config()
const mongoose = require('mongoose');
const express = require('express');
const morgan = require('morgan');
const server = express();
const productRouter = require('./router/product');
const userRouter = require('./router/user');
const baseURL = '/api/v1';
console.log('DB PASSWORD:',process.env.DB_PASSWORD);
const orderRouter = require("./router/order");
const cors = require('cors');
const {getUsersWithOrders} = require("./controller/user");

//db connection
mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB:', err));

//bodyParser
//server.use(cors);
server.use(express.json());
server.use(morgan('default'));
server.use(express.static('public'));
server.use(baseURL+'/products',productRouter.router);
server.use(baseURL+'/users',userRouter.router);
server.use(baseURL+'/orders',orderRouter.router);

server.use(baseURL+ '/user-with-order', getUsersWithOrders);

// 49.37.114.170/32
//lkQ6cIAeTtyul29m
//mongosh "mongodb+srv://md-cluster.aifwhrc.mongodb.net/" --apiVersion 1 --username swagatmishra

server.listen(process.env.PORT, () => {
    console.log(`Server running on http://localhost:${process.env.PORT}`);
});

