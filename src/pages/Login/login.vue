<template>
    <div class="container">
        <div class="change-form">
            <h3>Bem vindo</h3>
            <p>preencha os dados para realizar login na nossa aplicação</p>
        </div>
        <div class="form">
            <form @submit.prevent="">
                 <h3>Login</h3>
                  <base-input type="text"
                    placeholder="Nome"
                    v-model="user.name"
                    :addonLeftIcon="'nc-icon nc-single-02'"
                    >
                  </base-input>
                   <base-input type="text"
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
                 <button class="btn btn-primary btn-fill">Logar</button>
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
}
</script>

<style  src='../../assets/sass/lbd/_login.scss' lang="scss">
</style>