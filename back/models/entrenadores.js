const mongoose = require("mongoose");

const entrenadorEsquema = mongoose.Schema({
    
    "code":Number,
    "name": String,
    "profesion":String,
    "email": String,
    "telefono": Number,
    "password": String,
    "role":String
});

module.exports	= mongoose.model("entrenador",entrenadorEsquema);