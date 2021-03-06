const entrenadorModel = require("../models/entrenadores");

module.exports= class entrenadoresController {
    static async getAll(request, response) {
       try{
        const entrenadores = await entrenadorModel.find();
        response.status(200).json(entrenadores);
        } catch (err) {
            response.status(404).json({message: err.message});
        }
        
    }
    static async getByCode (request, response) {
        const code = request.params.code;
        try{
            const entrenador = await entrenadorModel.findOne({"code":code});
            if (entrenador != null) {
                response.status(200).json(entrenador);
            } else {
                response.status(404).json(entrenador)
            }
            } catch (err) {
                response.status(404).json({message: err.message});
            }
        
    }
    static async insert (req, res) {
        try{
            const entrenador = req.body;
            if (req.file != undefined){
                const imageName = req.file.filename;
                entrenador.imageurl = "/" + imageName;
            }
            const nuevoentrenador = await entrenadorModel.create(entrenador);
            res.status(201).json(nuevoentrenador);
        
            } catch (err) {
                res.status(400).json({message: err.message});
            }
        
    }
   
        
    }



