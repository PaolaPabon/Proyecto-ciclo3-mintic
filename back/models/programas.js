const mongoose = require("mongoose");

const programaEsquema = mongoose.Schema({
    "code": Number,
    "Titulo": String,
    "Descripción": String,
    "Plan Mensual": String,
    "Plan Semestral": String,
    "Plan Anual": String
});

module.exports	= mongoose.model("Programa",programaEsquema);