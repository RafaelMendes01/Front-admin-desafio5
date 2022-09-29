<template>
  <div>
    <VDialog header="Limitar Lista" :visible.sync="display">
      <h6>Quantidade</h6>
      <input type="text" v-model="limit" />
      <h6>Pagina</h6>
      <input type="text" v-model="skip" />
      <template #footer>
        <VButton
          label="Cancelar"
          icon="pi pi-times"
          class="p-button-text"
          @click="hiddenPaginateDialog"
        />
        <VButton
          label="Listar"
          icon="pi pi-check"
          autofocus
          @click="getSessionsPaginate"
        />
      </template>
    </VDialog>
    <div class="mb-3 mx-2">
         <template>
        <VButton
          label="Listar Sessoes"
          icon="pi pi-list"
          class="p-button-primary mr-2"
          @click="showSessionsData"
        />
        <VButton
        label="Limitar Listagem"
        icon="pi pi-sliders-h"
        class="p-button-info mr-2"
        @click="showPaginateDialog"
      />
      </template>
    </div>
    <VDataTable
      :value="this.$store.state.Sessions"
      :paginator="true"
      :rows="10"
      showGridlines
    >
      <VColumn field="user_id" header="User ID"></VColumn>
      <VColumn field="jwt" header="JWT"></VColumn>
    </VDataTable>
  </div>
</template>
<script>
export default {
  methods: {
     getSessionsPaginate() {
      const data = {
        jwt: `Bearer ${this.jwt}`,
        limit: this.limit,
        skip: this.skip,
      };
      this.$store.dispatch("getSessionsPaginate", data);
      this.display = false;
    },
    showSessionsData() {
      this.$store.dispatch("getSessions", `Bearer ${this.jwt}`);
    },
     showPaginateDialog() {
      this.display = true;
    },
    hiddenPaginateDialog() {
      this.display = false;
    },
  },
  data(){
    return {
      display: false,
      jwt: localStorage.getItem('token'),
      limit: "",
      skip: "",
    }
  }
};
</script>
<style scoped>
</style>


