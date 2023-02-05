const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const storeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required:true
    }

})

const Product = mongoose.model('Product', storeSchema)
module.exports = {Product};