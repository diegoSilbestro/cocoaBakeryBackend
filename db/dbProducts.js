const mongoose = require('mongoose');
require ('dotenv').config();

const dbProductsConnection = async() => {
    try {
        mongoose.set('strictQuery', true);
        await mongoose.connect(process.env.MONGO_CNN)
        console.log('Base de datos de productos conectada');
    } catch  {
        console.log('Error al intentar conectar la base de datos productos');
    }
}

module.exports = {dbProductsConnection};