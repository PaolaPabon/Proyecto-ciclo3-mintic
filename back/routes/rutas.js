const express = require("express");
const ProgramasController = require("../controllers/programasController");

const router = express.Router();

// rutas de productos

router.get("/programas", ProgramasController.getAll);
router.get("/programas/:id", ProgramasController.getById);
//router.post("/programas", ProgramasController.insert);
//router.put("/programas/:id", ProgramasController.update);
//router.delete("/programas/:id", ProgramasController.delate);


module.exports= router;