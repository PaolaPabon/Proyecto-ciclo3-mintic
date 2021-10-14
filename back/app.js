require("dotenv").config();

// CONFIGURACION DEL SERVIDOR

const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))

// AGREGAR LAS RUTAS A ESCUCHAR
app.use("/api", require("./routes/rutas"));

// CARGA DE ARCHIVOS
app.use(express.static("uploads"));

// CONFIGURAR LA CONEXION A LA BASE DE DATOS
const mongoose = require("mongoose");
mongoose.connect(process.env.DB_URI)
    .then(() => console.log("Conectado a la base de datos"))
    .catch(err => console.error(err));


// INICIAR SERVIDOR
const port = process.env.PORT;
app.listen(port,() => console.log(`Sevidor  en  http://localhost:${port}`));