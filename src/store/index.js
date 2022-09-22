import vue from 'vue'
import vuex from 'vuex'
import Requests from '../services/axiosRequests'

vue.use(vuex)

export default new vuex.Store({
    state: {
        UserName: '',
        UserEmail: '',
        jwtToken: ''
    },
    mutations: {
        'Login'(state, userData){
            state.jwtToken = userData.jwt;
            state.UserName = userData.data.name;
            state.UserEmail = userData.data.email;
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
                window.location.replace('/teste')
            })
            .catch(error => console.log(error))
        }

    },
})