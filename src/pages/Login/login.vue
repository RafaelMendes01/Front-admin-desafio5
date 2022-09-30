<template>
    <div class="container">
        <div class="change-form">
            <h3>Bem vindo</h3>
        </div>
        <div class="form">
            <form @submit.prevent="submit">
                 <h3>Login</h3>
                  <base-input type="text"
                    placeholder="Nome"
                    v-model="user.name"
                    :addonLeftIcon="'nc-icon nc-single-02'"
                    >
                  </base-input>
                   <base-input type="email"
                    placeholder="Email"
                    v-model="user.email"
                    :addonLeftIcon="'nc-icon nc-email-83'"
                    >
                  </base-input>
                    <base-input type="password"
                    placeholder="Senha"
                    v-model="user.password"
                    :addonLeftIcon="'nc-icon nc-lock-circle-open'"
                    >
                  </base-input>
                 <button class="btn btn-primary btn-fill" type="submit">Logar</button>
            </form>
        </div>
    </div>
</template>
<script>
export default{
    data(){
        return {
            user: {
                name: '',
                email: '',
                password: ''
            }
        }
    },
    methods: {
       async submit () {
        this.$store.dispatch('Login', this.user)
        }
    },
    created(){
        localStorage.clear();
    }
}
</script>

<style  src='../../assets/sass/lbd/_login.scss' lang="scss">
</style>