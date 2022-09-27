import vue from 'vue'
import vuex from 'vuex'
import Requests from '../services/axiosRequests'

vue.use(vuex)

export default new vuex.Store({
    state: {
        UserName: '',
        UserEmail: '',
        jwtToken: '',
        Movies: [],
        Theaters: [],
        Users: [],
        Comments: [],
        Sessions: [],
    },
    mutations: {
        'Login'(state, userData) {
            state.jwtToken = userData.jwt;
            state.UserName = userData.data.name;
            state.UserEmail = userData.data.email;
        },
        'GET_MOVIES'(state, Movies) {
            state.Movies = Movies
        },
        'GET_THEATERS'(state, Theaters) {
            state.Theaters = Theaters
        },
        'GET_USERS'(state, Users) {
            state.Users = Users
        },
        'GET_COMMENTS'(state, Comments) {
            state.Comments = Comments
        },
        'GET_SESSIONS'(state, Sessions) {
            state.Sessions = Sessions
        }
    },
    actions: {
        async Login({ commit }, data) {
            await Requests.login(data)
                .then(res => {
                    const userData = {
                        jwt: res.data.access_token,
                        data
                    };
                    commit('Login', userData);
                    window.location.replace('/#/admin/Movies')
                })
                .catch(error => console.log(error))
        },
        async getMovies({ commit }, token) {
            await Requests.getMovies({ headers: { Authorization: token } })
                .then(res => {
                    commit('GET_MOVIES', res.data)
                })
        },
        async deleteMovies({ commit }, data) {
            console.log(data)
            await Requests.DeleteMovies({ headers: { Authorization: data.jwt } }, data.id)
                .then(res => {
                })
        },
        async createMovies({ commit }, data) {
            console.log(data.Movies)
            await Requests.CreateMovies({ headers: { Authorization: data.jwt } }, data.Movies)
                .then(res => {
                })
        },
        async updateMovies({ commit }, data) {
            await Requests.UpdateMovies({ headers: { Authorization: data.jwt } }, data.id, data.Movies)
                .then(res => {
                })
        },
        async getUsers({ commit }, token) {
            await Requests.getUsers({ headers: { Authorization: token } })
                .then(res => {
                    commit('GET_USERS', res.data)
                })
        },
        async deleteUsers({ commit }, data) {
            await Requests.DeleteUsers({ headers: { Authorization: data.jwt } }, data.id)
                .then(res => {
                })
        },
        async createUsers({ commit }, data) {
            await Requests.CreateUsers(data)
                .then(res => {
                })
        },
        async updateUsers({ commit }, data) {
            await Requests.UpdateUsers({ headers: { Authorization: data.jwt } }, data.id, data.Users)
                .then(res => {
                })
        },
        async getTheaters({ commit }, token) {
            await Requests.getTheaters({ headers: { Authorization: token } })
                .then(res => {
                    commit('GET_THEATERS', res.data)
                })
        },
        async deleteTheaters({ commit }, data) {
            await Requests.DeleteTheaters({ headers: { Authorization: data.jwt } }, data.id)
                .then(res => {
                })
        },
        async createTheaters({ commit }, data) {
            await Requests.CreateTheaters({ headers: { Authorization: data.jwt } }, data.Theaters)
                .then(res => {

                })
        },
        async updateTheaters({ commit }, data) {
            await Requests.UpdateTheaters({ headers: { Authorization: data.jwt } }, data.id, data.Theaters)
                .then(res => {
                })
        },
        async getComments({ commit }, token) {
            await Requests.getComments({ headers: { Authorization: token } })
                .then(res => {
                    commit('GET_COMMENTS', res.data)
                })
        },
        async getSessions({ commit }, token) {
            await Requests.getSessions({ headers: { Authorization: token } })
                .then(res => {
                    commit('GET_SESSIONS', res.data)
                })
        }

    },
})
