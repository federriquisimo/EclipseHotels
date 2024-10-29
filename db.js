const mongoose = require("mongoose");

var mongoURL = "mongodb+srv://federicoariasg:xkuQCetZQ6O0ChTD@mongoeclipse.3f3kg.mongodb.net/mem-rooms"

mongoose.connect(mongoURL, {useUnifiedTopology : true, useNewUrlParser : true})

var connection = mongoose.connection

connection.on('error', () =>{
    console.log('Mongo DB Connection Failed')
})

connection.on('connected', () =>{
    console.log('Mongo DB Connection Successful')
})

module.exports = mongoose

