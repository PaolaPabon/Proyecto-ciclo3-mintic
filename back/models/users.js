const mongoose = require("mongoose");

const userEsquema = mongoose.Schema({
    
    "username": String,
    "email": String,
    "password": String,
    "role":String
});

module.exports	= mongoose.model("user",userEsquema);