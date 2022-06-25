import axios from 'axios';

// axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

export const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
})