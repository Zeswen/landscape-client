import axios from 'axios';

let service = axios.create({
    // @TODO: baseUrl should be a .env variable
    baseURL: `${process.env.REACT_APP_API_URL}/auth`,
    withCredentials: true
})

export default class AuthService {

    service = service;

    signup = (email, password) => {
        return this.service.post('/signup', { email, password })
            .then(res => res.data);
    }

    login = (username, password) => {
        return this.service.post('/login', { username, password })
            .then(res => res.data);
    }

    upload = (file) => {
        return this.service.post('/upload', { file })
            .then(res => res.data);
    }

    edit = (email, password) => {
        return this.service.post('/edit', { email, password })
            .then(res => res.data);
    }

    logout = () => {
        return this.service.get('/logout')
            .then(res => res.data);
    }

    loggedin = () => {
        return this.service.get('/loggedin')
            .then(res => res.data)
    }
}