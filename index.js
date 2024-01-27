const express = require('express');
const morgan = require('morgan');
const server = express();
const productRouter = require('./router/product')
const userRouter = require('./router/user')
const port = 8000;
const baseURL = '/api/v1';

//bodyParser
server.use(express.json());
server.use(morgan('default'));
server.use(express.static('public'));
server.use(baseURL+'/products',productRouter.router);
server.use(baseURL+'/users',userRouter.router);

server.listen(8000, () => {
    console.log(`Server running on http://localhost:${port}`);
});
