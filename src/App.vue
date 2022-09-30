<template>
  <div class="background">
    <VToast />
    <router-view />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["getErrorMessage", 'getSuccessMessage']),
  },
  watch: {
    getErrorMessage(message) {
      if (this.$store.state.errorMessage !== "") {
        this.$toast.add({
          severity: "error",
          summary: "Erro",
          detail: message,
          life: 1500,
        });
        this.$store.state.errorMessage = "";
      }
    },
    getSuccessMessage(message) {
         if (this.$store.state.successMessage !== "") {
        this.$toast.add({
          severity: "success",
          summary: "sucesso",
          detail: `Requisição realizada`,
          life: 1500,
        });
        this.$store.state.successMessage = "";
      }
    }
  },
};
</script>
<style lang="scss">
.background {
  background-color: #e3e3e3;
}
</style>
