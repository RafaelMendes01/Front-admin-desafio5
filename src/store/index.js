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
        errorMessage: "",
        successMessage: ""
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
        },
        setErrorMessage(state, payload) {
            state.errorMessage = payload;
        },
        setSuccessMessage(state, payload) {
            state.successMessage = payload;
        },

    },
    getters: {
        getErrorMessage: (state) => state.errorMessage,
        getSuccessMessage: (state) => state.successMessage,
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
                .catch(error => {
                    commit("setErrorMessage", error.message);
                })
        },
        async getMovies({ commit }, token) {
            await Requests.getMovies({ headers: { Authorization: token } })
                .then(res => {
                    commit('GET_MOVIES', res.data)
                    commit("setSuccessMessage", res.status);
                })
                .catch(error => {
                    commit("setErrorMessage", error.message);
                })
        },
        async deleteMovies({ commit }, data) {
            console.log(data)
            await Requests.DeleteMovies({ headers: { Authorization: data.jwt } }, data.id)
                .then(res => {
                    commit("setSuccessMessage", res.status);
                })
                .catch(error => {
                    commit("setErrorMessage", error.message);
                })
        },
        async createMovies({ commit }, data) {
            console.log(data.Movies)
            await Requests.CreateMovies({ headers: { Authorization: data.jwt } }, data.Movies)
                .then(res => {
                    commit("setSuccessMessage", res.status);
                })
                .catch(error => {
                    commit("setErrorMessage", error.message);
                })
        },
        async updateMovies({ commit }, data) {
            await Requests.UpdateMovies({ headers: { Authorization: data.jwt } }, data.id, data.Movies)
                .then(res => {
                    commit("setSuccessMessage", res.status);
                })
                .catch(error => {
                    commit("setErrorMessage", error.message);
                })
        },
        async getUsers({ commit }, token) {
            await Requests.getUsers({ headers: { Authorization: token } })
                .then(res => {
                    commit('GET_USERS', res.data)
                    commit("setSuccessMessage", res.status);
                })
                .catch(error => {
                    commit("setErrorMessage", error.message);
                })
        },
        async deleteUsers({ commit }, data) {
            await Requests.DeleteUsers({ headers: { Authorization: data.jwt } }, data.id)
                .then(res => {
                    commit("setSuccessMessage", res.status);
                })
                .catch(error => {
                    commit("setErrorMessage", error.message);
                })
        },
        async createUsers({ commit }, data) {
            await Requests.CreateUsers(data)
                .then(res => {
                    commit("setSuccessMessage", res.status);
                })
                .catch(error => {
                    commit("setErrorMessage", error.message);
                })
        },
        async updateUsers({ commit }, data) {
            await Requests.UpdateUsers({ headers: { Authorization: data.jwt } }, data.id, data.Users)
                .then(res => {
                    commit("setSuccessMessage", res.status);
                })
                .catch(error => {
                    commit("setErrorMessage", error.message);
                })
        },
        async getTheaters({ commit }, token) {
            await Requests.getTheaters({ headers: { Authorization: token } })
                .then(res => {
                    commit('GET_THEATERS', res.data)
                    commit("setSuccessMessage", res.status);
                })
                .catch(error => {
                    commit("setErrorMessage", error.message);
                })
        },
        async deleteTheaters({ commit }, data) {
            await Requests.DeleteTheaters({ headers: { Authorization: data.jwt } }, data.id)
                .then(res => {
                    commit("setSuccessMessage", res.status);
                })
                .catch(error => {
                    commit("setErrorMessage", error.message);
                })
        },
        async createTheaters({ commit }, data) {
            await Requests.CreateTheaters({ headers: { Authorization: data.jwt } }, data.Theaters)
                .then(res => {
                    commit("setSuccessMessage", res.status);
                })
                .catch(error => {
                    commit("setErrorMessage", error.message);
                })
        },
        async updateTheaters({ commit }, data) {
            await Requests.UpdateTheaters({ headers: { Authorization: data.jwt } }, data.id, data.Theaters)
                .then(res => {
                    commit("setSuccessMessage", res.status);
                })
                .catch(error => {
                    commit("setErrorMessage", error.message);
                })
        },
        async getComments({ commit }, token) {
            await Requests.getComments({ headers: { Authorization: token } })
                .then(res => {
                    commit('GET_COMMENTS', res.data)
                    commit("setSuccessMessage", res.status);
                })
                .catch(error => {
                    commit("setErrorMessage", error.message);
                })
        },
        async getSessions({ commit }, token) {
            await Requests.getSessions({ headers: { Authorization: token } })
                .then(res => {
                    commit('GET_SESSIONS', res.data)
                    commit("setSuccessMessage", res.status);
                })
                .catch(error => {
                    commit("setErrorMessage", error.message);
                })
        }

    },
})
