const mongoose = require('mongoose')
const Schema = mongoose.Schema;

let Todo = new Schema({
    mynewtodo_description: { 
        type: String
    },
    mynewtodo_responsible: { 
        type: String
    },
    mynewtodo_priority: { 
        type: String
    },
    mynewtodo_completed: { 
        type: Boolean
    }
});

module.exports = mongoose.model('Ploppy2', Todo)