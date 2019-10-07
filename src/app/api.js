import axios from 'axios'
const timeout = 2000;

export const api = {
   get catalog () {
       return axios.get('/db/catalog.json');
   },
};