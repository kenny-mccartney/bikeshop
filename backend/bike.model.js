const mongoose = require('mongoose')
const Schema = mongoose.Schema;

let Bike = new Schema({
    make: { 
        type: String
    },
    model: { 
        type: String
    },
    price: { 
        type: String
    },
    type: { 
        type: String
    },
    available: { 
        type: Boolean
    }

});

module.exports = mongoose.model('Bike', Bike)