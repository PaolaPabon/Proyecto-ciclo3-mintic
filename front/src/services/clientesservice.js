import httpClient from "./httpClient";
const ENDPOINT = "/api/clientes";


const getAllClientes = () => httpClient.get(ENDPOINT);

const getCliente = (code) => httpClient.get(ENDPOINT + "/" + code); 

const insertCliente = (cliente) => httpClient.post(ENDPOINT,cliente);

const updateCliente = (code, cliente) => httpClient.put(ENDPOINT + "/" + code, cliente);

export {
    getAllClientes,
    getCliente,
    insertCliente,
    updateCliente
}