import httpClient from "./httpClient";
const ENDPOINT = "/api/entrenadores";


const getAllEntrenadores = () => httpClient.get(ENDPOINT);
const getEntrenador = (code) => httpClient.get(ENDPOINT + "/" + code);

export {
    getAllEntrenadores,
    getEntrenador

}