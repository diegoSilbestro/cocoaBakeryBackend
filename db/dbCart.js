const mongoose = require('mongoose');
require('dotenv').config();

const dbCartConnection = async () => {
    try {
        mongoose.set('strictQuery', true);
        await mongoose.connect(process.env.MONGO_CNN)
        console.log('Base de datos de carrito conectada');
    } catch (err) {
        console.log('Error al intentar conectar la base de datos carrito');        
    }
}

module.exports = {dbCartConnection}