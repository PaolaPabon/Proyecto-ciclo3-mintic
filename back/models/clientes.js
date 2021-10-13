const mongoose = require("mongoose");

const clienteEsquema = mongoose.Schema({
    
    "code":Number,
    "username": String,
    "email": String,
    "password":String,
    "plan":String,
    "asesor":String,
    "horario":String,
    "entrenamiento":String,
    "dieta":String,
});

module.exports	= mongoose.model("cliente",clienteEsquema);