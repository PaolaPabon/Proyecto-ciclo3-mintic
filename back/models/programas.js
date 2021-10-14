const mongoose = require("mongoose");

const programaEsquema = mongoose.Schema({
    "code": Number,
    "Titulo": String,
    "Descripción": String,
    "PlanM": String,
    "PlanS": String,
    "PlanA": String,
    "Subtitulo": String,
    "imageurl":String
    
});

module.exports	= mongoose.model("Programa",programaEsquema);