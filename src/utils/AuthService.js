import React from 'react'
import axios from 'axios';

let service = axios.create({
    // @TODO: baseUrl should be a .env variable
    baseURL: 'http://localhost:5000/api',
    withCredentials: true
})

export default class AuthService {

    service = service;

    signup = (email, password) => {
        return this.service.post('/auth/signup', { email, password })
            .then(res => res.data);
    }

    login = (username, password) => {
        return this.service.post('/auth/login', { username, password })
            .then(res => res.data);
    }

    upload = (file) => {
        return this.service.post('/auth/upload', { file })
            .then(res => res.data);
    }

    edit = (email, password) => {
        return this.service.post('/auth/edit', { email, password })
            .then(res => res.data);
    }

    logout = () => {
        return this.service.get('/auth/logout')
            .then(res => res.data);
    }

    loggedin = () => {
        return this.service.get('/auth/loggedin')
            .then(res => res.data);
    }
}