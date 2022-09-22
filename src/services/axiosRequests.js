import { http } from './axiosConfig'

export default {

    login: (data) => {
        return http.post('login', data)
    },
    getUsers: () => {
        return http.get('users')
    }
}