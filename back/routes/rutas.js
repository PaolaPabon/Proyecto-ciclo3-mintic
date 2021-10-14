const express = require("express");
const ProgramasController = require("../controllers/programasController");
const UsersController = require("../controllers/usersController");
const EntrenadoresController = require("../controllers/entrenadoresController");
const ClientesController = require("../controllers/clientesController");

// Carga de archivos
const multer = require("multer");
const storageConfig = multer.diskStorage({
    destination: (req, res, cb) => {
        cb(null, "./uploads");
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
    }
});

const upload = multer({ storage: storageConfig });

const router = express.Router();

// rutas de productos

router.get("/programas", ProgramasController.getAll);
router.get("/programas/:code", ProgramasController.getByCode);
router.post("/programas", upload.single("image"), ProgramasController.insert);
router.put("/programas/:code", ProgramasController.update);
router.delete("/programas/:code", ProgramasController.delate);

// rutas de users
router.post("/users", UsersController.insert);
router.post("/authenticate", UsersController.validateUser);

// rutas de entrenadores

router.get("/entrenadores", EntrenadoresController.getAll);
router.get("/entrenadores/:code", EntrenadoresController.getByCode);
router.post("/entrenadores", EntrenadoresController.insert);

// rutas de productos

router.get("/clientes", ClientesController.getAll);
router.get("/clientes/:code", ClientesController.getByCode);
router.post("/clientes", ClientesController.insert);
router.put("/clientes/:code", ClientesController.update);
router.delete("/clientes/:code", ClientesController.delate);

module.exports= router;