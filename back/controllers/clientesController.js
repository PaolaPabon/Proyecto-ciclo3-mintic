const clienteModel = require("../models/clientes");

module.exports= class clientesController {
    static async getAll(request, response) {
       try{
        const clientes = await clienteModel.find();
        response.status(200).json(clientes);
        } catch (err) {
            response.status(404).json({message: err.message});
        }
        
    }
    static async getByCode (request, response) {
        const code = request.params.code;
        try{
            const cliente = await clienteModel.findOne({"code":code});
            if (cliente != null) {
                response.status(200).json(cliente);
            } else {
                response.status(404).json(cliente)
            }
            } catch (err) {
                response.status(404).json({message: err.message});
            }
        
    }
    static async insert (req, res) {
        try{
            const cliente = req.body;
            if (req.file != undefined){
                const imageName = req.file.filename;
                cliente.imageurl = "/" + imageName;
            }
            const nuevocliente = await clienteModel.create(cliente);
            res.status(201).json(nuevocliente);
            } catch (err) {
                res.status(400).json({message: err.message});
            }
        
    }
    static async update (request, response) {
        try{
            const code = request.params.code;
            const cliente = request.body;
            const actualizarcliente = await clienteModel.updateOne({"code":code},cliente);
            response.status(200).json(actualizarcliente);
            } catch (err) {
                    response.status(400).json({message: err.message});
            }
        
    }
    static async delate (request, response) {
        try{
            const code = request.params.code;
            await clienteModel.deleteOne({"code":code});
            response.status(200).json();
            } catch (err) {
                    response.status(400).json({message: err.message});
            }
        
    }
        
    }



