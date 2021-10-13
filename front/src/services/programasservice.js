import httpClient from "./httpClient";
const ENDPOINT = "/api/programas";


const getAllProgramas = () => httpClient.get(ENDPOINT);

export {
    getAllProgramas
}