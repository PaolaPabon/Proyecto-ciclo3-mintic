const programaModel = require("../models/programas");

module.exports= class programasController {
    static async getAll(request, response) {
       try{
        const programas = await programaModel.find();
        response.status(200).json(programas);
        } catch (err) {
            response.status(404).json({message: err.message});
        }
        
    }
    static async getByCode (request, response) {
        const code = request.params.code;
        try{
            const programa = await programaModel.findOne({"code":code});
            if (programa != null) {
                response.status(200).json(programa);
            } else {
                response.status(404).json(programa)
            }
            } catch (err) {
                response.status(404).json({message: err.message});
            }
        
    }
    static async insert (request, response) {
        try{
            const programa = request.body;
            const nuevoprograma = await programaModel.create(programa);
            response.status(201).json(nuevoprograma);
            } catch (err) {
                response.status(400).json({message: err.message});
            }
        
    }
    static async update (request, response) {
        try{
            const code = request.params.code;
            const programa = request.body;
            const actualizarprograma = await programaModel.updateOne({"code":code},programa);
            response.status(200).json(actualizarprograma);
            } catch (err) {
                    response.status(400).json({message: err.message});
            }
        
    }
    static async delate (request, response) {
        try{
            const code = request.params.code;
            await programaModel.deleteOne({"code":code});
            response.status(200).json();
            } catch (err) {
                    response.status(400).json({message: err.message});
            }
        
    }
        
    }



