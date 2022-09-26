import { http } from './axiosConfig'

export default {

    login: (data) => {
        return http.post('login', data)
    },
    getUsers: () => {
        return http.get('users')
    },
    getMovies: (token) => {
        return http.get('movies',token)
    },
    DeleteMovies: (token, id) => {
        return http.delete(`movies/${id}`,token)
    }
}