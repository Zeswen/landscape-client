import axios from 'axios';

let service = axios.create({
    // @TODO: baseUrl should be a .env variable
    baseURL: 'http://localhost:5000/api/pages',
    withCredentials: true
})

export default class PagesService {

    service = service;

    newPage = (title, id) => {
        return this.service.post('/newPage', { title, id })
            .then(res => res.data)
    }

    getPage = (id) => {
        return this.service.post('/getPage', { id })
            .then(res => res.data)
    }

    updatePage = (page) => {
        return this.service.post('/updatePage', { ...page })
            .then(res => res.data)
    }
}