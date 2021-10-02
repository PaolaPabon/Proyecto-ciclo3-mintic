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
    static async getById (request, response) {
        const id = request.params.id;
        try{
            const programa = await programaModel.findOne({"code":id});
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
            const id = request.params.id;
            const programa = request.body;
            const actualizarprograma = await programaModel.updateOne({"code":id},programa);
            response.status(200).json(actualizarprograma);
            } catch (err) {
                    response.status(400).json({message: err.message});
            }
        
    }
    static async delate (request, response) {
        try{
            const id = request.params.id;
            await programaModel.deleteOne({"code":id});
            response.status(200).json();
            } catch (err) {
                    response.status(400).json({message: err.message});
            }
        
    }
        
    }



