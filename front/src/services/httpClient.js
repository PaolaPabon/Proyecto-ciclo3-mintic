import axios from 'axios';

const httpClient = axios.create ({
    timeout: 3000,
    headers:{
        "content-type":"application/json"
    }
});

export default httpClient;