const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
require('dotenv').config();


const indexRouter = require('./routes/index');
const productsRouter = require('./routes/products');
const cartRouter = require('./routes/cart')
const { dbProductsConnection } = require('./db/dbProducts')
const { dbCartConnection } = require('./db/dbCart');
const { Server } = require('http');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//CORS
app.use(cors({ origin: 'http://localhost:3000' }));
app.use((req, res, next)=> {
    res.header('Access-control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-control-Allow-Credentials', 'true');
    res.header(
        'Access-control-Allow-Headers',
        'Origin', 'X-Requested-With, Content-Type, Accept'
    );
    res.header(
        'Access-Control-Allow-Methods',
        'GET, POST, PUT, DELETE'
    );
    next();
});

//RUTAS
app.use('/', indexRouter);
app.use('/products', productsRouter);
app.use('/cart', cartRouter);


//DB CONECTION
dbProductsConnection();
dbCartConnection();

module.exports = app;
