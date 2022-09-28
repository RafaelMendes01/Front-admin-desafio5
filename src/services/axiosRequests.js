import { http } from './axiosConfig'

export default {

    login: (data) => {
        return http.post('login', data)
    },
    getMovies: (token) => {
        return http.get('movies', token)
    },
    getMoviesPaginate: (token, limit, skip) => {
        return http.get(`movies/paginate?limit=${limit}&skip=${skip}`, token)
    },
    DeleteMovies: (token, id) => {
        return http.delete(`movies/${id}`, token)
    },
    CreateMovies: (token, data) => {
        return http.post('movies', data, token)
    },
    UpdateMovies: (token, id, data) => {
        return http.patch(`movies/${id}`, data, token)
    },
    getUsers: (token) => {
        return http.get('users', token)
    },
    getUsersPaginate: (token, limit, skip) => {
        return http.get(`users/paginate?limit=${limit}&skip=${skip}`, token)
    },
    DeleteUsers: (token, id) => {
        return http.delete(`users/${id}`, token)
    },
    CreateUsers: (data) => {
        return http.post('users', data)
    },
    UpdateUsers: (token, id, data) => {
        return http.patch(`users/${id}`, data, token)
    },
    getTheaters: (token) => {
        return http.get('theaters', token)
    },
    getTheatersPaginate: (token, limit, skip) => {
        return http.get(`theaters/paginate?limit=${limit}&skip=${skip}`, token)
    },
    DeleteTheaters: (token, id) => {
        return http.delete(`theaters/${id}`, token)
    },
    CreateTheaters: (token, data) => {
        return http.post('theaters', data, token)
    },
    UpdateTheaters: (token, id, data) => {
        return http.patch(`theaters/${id}`, data, token)
    },
    getComments: (token) => {
        return http.get('comments', token)
    },
    getSessions: (token) => {
        return http.get('sessions', token)
    },
}