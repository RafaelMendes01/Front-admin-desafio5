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
        MoviesCount: 0,
        TheatersCount: 0,
        UsersCount: 0,
        CommentsCount: 0,
        SessionsCount: 0,
        errorMessage: "",
        successMessage: "",
        IsOpenSideBar: "",
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
        'GET_MOVIES_COUNT'(state, Movies) {
            state.MoviesCount = Movies
        },
        'GET_THEATERS_COUNT'(state, Theaters) {
            state.TheatersCount = Theaters
        },
        'GET_USERS_COUNT'(state, Users) {
            state.UsersCount = Users
        },
        'GET_COMMENTS_COUNT'(state, Comments) {
            state.CommentsCount = Comments
        },
        'GET_SESSIONS_COUNT'(state, Sessions) {
            state.SessionsCount = Sessions
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
                    localStorage.setItem('token', userData.jwt)
                    window.location.replace('/#/admin/Overview')
                })
                .catch(error => {
                    commit("setErrorMessage", error.message);
                })
        },
        async getMovies({ commit }, token) {
            await Requests.getMovies({ headers: { Authorization: token } })
                .then(res => {
                    commit('GET_MOVIES', res.data)
                })
                .catch(error => {
                    commit("setErrorMessage", error.message);
                })
        },
        async getMoviesPaginate({ commit }, data) {
            await Requests.getMoviesPaginate({ headers: { Authorization: data.jwt } }, data.limit, data.skip)
                .then(res => {
                    commit('GET_MOVIES', res.data)
                    console.log(res)
                })
                .catch(error => {
                    commit("setErrorMessage", error.message);
                })
        },
        async getMoviesCount({ commit }, token) {
            await Requests.getMoviesCount({ headers: { Authorization: token } })
                .then(res => {
                    commit('GET_MOVIES_COUNT', res.data)
                })
                .catch(error => {
                    commit("setErrorMessage", error.message);
                })
        },
        async deleteMovies({ commit }, data) {
            await Requests.DeleteMovies({ headers: { Authorization: data.jwt } }, data.id)
                .then(res => {
                    commit("setSuccessMessage", res.status);
                })
                .catch(error => {
                    commit("setErrorMessage", error.message);
                })
        },
        async createMovies({ commit }, data) {
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
                })
                .catch(error => {
                    commit("setErrorMessage", error.message);
                })
        },
        async getUsersPaginate({ commit }, data) {
            console.log(data)
            await Requests.getUsersPaginate({ headers: { Authorization: data.jwt } }, data.limit, data.skip)
                .then(res => {
                    commit('GET_USERS', res.data)
                })
                .catch(error => {
                    commit("setErrorMessage", error.message);
                })
        },
        async getUsersCount({ commit }, token) {
            await Requests.getUsersCount({ headers: { Authorization: token } })
                .then(res => {
                    commit('GET_USERS_COUNT', res.data)
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
                })
                .catch(error => {
                    commit("setErrorMessage", error.message);
                })
        },
        async getTheatersPaginate({ commit }, data) {
            console.log(data)
            await Requests.getTheatersPaginate({ headers: { Authorization: data.jwt } }, data.limit, data.skip)
                .then(res => {
                    commit('GET_THEATERS', res.data)
                })
                .catch(error => {
                    commit("setErrorMessage", error.message);
                })
        },
        async getTheatersCount({ commit }, token) {
            await Requests.getTheatersCount({ headers: { Authorization: token } })
                .then(res => {
                    commit('GET_THEATERS_COUNT', res.data)
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
                })
                .catch(error => {
                    commit("setErrorMessage", error.message);
                })
        },
        async getSessions({ commit }, token) {
            await Requests.getSessions({ headers: { Authorization: token } })
                .then(res => {
                    commit('GET_SESSIONS', res.data)
                })
                .catch(error => {
                    commit("setErrorMessage", error.message);
                })
        },
        async getCommentsPaginate({ commit }, data) {
            await Requests.getCommentsPaginate({ headers: { Authorization: data.jwt } }, data.limit, data.skip)
                .then(res => {
                    commit('GET_COMMENTS', res.data)
                })
                .catch(error => {
                    commit("setErrorMessage", error.message);
                })
        },
        async getCommentsCount({ commit }, token) {
            await Requests.getCommentsCount({ headers: { Authorization: token } })
                .then(res => {
                    commit('GET_COMMENTS_COUNT', res.data)
                })
                .catch(error => {
                    commit("setErrorMessage", error.message);
                })
        },
        async getSessionsPaginate({ commit }, data) {
            await Requests.getSessionsPaginate({ headers: { Authorization: data.jwt } }, data.limit, data.skip)
                .then(res => {
                    commit('GET_SESSIONS', res.data)
                })
                .catch(error => {
                    commit("setErrorMessage", error.message);
                })
        },
        async getSessionsCount({ commit }, token) {
            await Requests.getSessionsCount({ headers: { Authorization: token } })
                .then(res => {
                    commit('GET_SESSIONS_COUNT', res.data)
                })
                .catch(error => {
                    commit("setErrorMessage", error.message);
                })
        },

    },
})
