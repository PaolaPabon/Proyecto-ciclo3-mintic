const mongoose = require("mongoose");

const userEsquema = mongoose.Schema({
    
    "code": Number,
    "email": String,
    "password": String,
    "role":String
});

module.exports	= mongoose.model("user",userEsquema);