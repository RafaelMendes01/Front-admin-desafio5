import vue from 'vue'
import vuex from 'vuex'
import Requests from '../services/axiosRequests'

vue.use(vuex)

export default new vuex.Store({
    state: {
        UserName: '',
        UserEmail: '',
        jwtToken: '',
        Movies: []
    },
    mutations: {
        'Login'(state, userData){
            state.jwtToken = userData.jwt;
            state.UserName = userData.data.name;
            state.UserEmail = userData.data.email;
        },
        'GET_MOVIES'(state, Movies){
            state.Movies = Movies
        }
    },
    actions: {
        async Login({commit}, data){
            await Requests.login(data)
            .then(res => {
                const userData =  {
                    jwt: res.data.access_token,
                    data
                };
                commit('Login', userData);
                window.location.replace('/#/dashboard')
            })
            .catch(error => console.log(error))
        },
        async getMovies({commit}, token){
            await Requests.getMovies({headers: { Authorization: token }})
            .then(res => {
                commit('GET_MOVIES', res.data)
            })
        },
        async deleteMovies({commit},data){
            console.log(data)
            await Requests.DeleteMovies({headers: { Authorization: data.jwt }}, data.id)
            .then(res => {
            })
        }

    },
})