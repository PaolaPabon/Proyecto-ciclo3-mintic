module.exports= class programasController {
    static async getAll(request, response) {
        const respuesta = [
            {
            "nombre": "programas WorGym",
            "Menusualidad": "59.000"
            }
        ];
        response.status(200).json(respuesta);
        
    }
    static async getById (request, response) {
        const id = request.params.id;
        const respuesta = [
            {
            "Id":id,
            "nombre": "programas WorGym",
            "Menusualidad": "59.000"
            }
        ];
        response.status(200).json(respuesta);
        
    }
    static async insert (request, response) {
        
        response.status(201).json();
        
    }
    static async update (request, response) {
        
        response.status(201).json();
        
    }
    static async delate (request, response) {
        
        response.status(201).json();
        
    }


}
