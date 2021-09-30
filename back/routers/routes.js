const express = require("express");
const router = express.Router();

// rutas de productos
router.get("/programas",(req, res) => {
    return [{
        "nombre": "programas WorGym",
        "Menusualidad": "59.000"
    }
    ];
    res.status(200).json(resp);
});

modulo.exports = router;