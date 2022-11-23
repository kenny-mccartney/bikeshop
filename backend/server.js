const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors')
const PORT = 4000;
const mongoose = require('mongoose')
const bikeRoutes = express.Router();

let Bike = require('./bike.model')

app.use(cors());
app.use(bodyParser.json());

// Creates the database name
mongoose.connect("mongodb://127.0.0.1:27017/my_new_db_457", { useNewUrlParser: true})
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("Dbase connection established! Yay!")
})

bikeRoutes.route('/').get(function(req, res) {
    Bike.find(function(err, bikes) {
        console.log('The "/" function got called')
        if (err) {
            console.log(err)
        } else {
            console.log('The "/" function was successful')
            res.json(bikes);
        }
    })
})

bikeRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id
    console.log('Called the id function');
    Bike.findById(id, function(err, bike) {
        res.json(bike);
        console.log(res.json(bike))
    })
})


bikeRoutes.route('/add').post(function(req, res) {
    let bike = new Bike(req.body);
    bike.save()
        .then(bike => {
            res.status(200).json({'bike' : 'bike added successfully'})
        })
        .catch(err => {
            res.status(400).send("Adding new bike FAILED!")
        })
})


bikeRoutes.route('/delete/:id').post(function(req, res) {
    console.log('The delete function got called')
     Bike.findById(req.params.id, function(err, bike) {
        if (!bike)
            res.status(404).send('data not found')
        else
        res.status(200).json({'bike' : 'bike found'})
    })
 
    Bike.findByIdAndDelete(req.params.id, function(err, bike) {
        res.status(200).json({'bike' : 'bike successfully'})
        if (!bike)
            res.status(404).send('data not found')
        else
            bike.remove().then(bike => {
                res.json('Bike updated');
            })
            .catch(err => {
                res.status(400).send('Update not possible')
            })
    })
})


bikeRoutes.route('/update/:id').post(function(req, res) {
    console.log("called the server update function")
    Bike.findById(req.params.id, function(err, bike) {
        if (!bike)
            res.status(404).send('data not found')
        else
            bike.make = req.body.make;
            bike.model = req.body.model;
            bike.price = req.body.price;
            bike.type = req.body.type;
            bike.available = req.body.available;

            bike.save().then(bike => {
                res.json('Todo updated');
            })
            .catch(err => {
                res.status(400).send('Update not possible')
            })
    })
})
app.use('/', bikeRoutes);



app.listen(PORT, function() {
    console.log("Server is running on port " + PORT)
});