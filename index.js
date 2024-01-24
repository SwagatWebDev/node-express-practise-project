const http = require('http');
const fs = require('fs');
const express = require('express');

const index = fs.readFileSync('index.html', 'utf-8');
const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
const products = data.products;
const PORT = 8000;

const app = express();

server.use((req, res, next) => {
    console.log(req.method, req.ip, req.hostname, new Date());
    next();
});

const auth = (req, res, next) => {
    console.log(req.query);
    if (req.query.password === '123') {
      next();
    } else {
      res.sendStatus(401);
    }
    next();

};

// server.use(auth);

// API - Endpoint - Route

server.get('/', auth, (req, res) => {
    res.json({ type: 'GET' });
});
server.post('/', auth, (req, res) => {
    res.json({ type: 'POST' });
});
server.put('/', (req, res) => {
    res.json({ type: 'PUT' });
});
server.delete('/', (req, res) => {
    res.json({ type: 'DELETE' });
});
server.patch('/', (req, res) => {
    res.json({ type: 'PATCH' });
});


server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
