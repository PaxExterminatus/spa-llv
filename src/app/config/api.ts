import axios, {AxiosPromise} from 'axios'

export let api : Api;

export class Api {
    get catalog() : Promise<AxiosPromise>
    {
        return axios.get('/db/catalog.json')
    }
}

api = new Api();