<template>
  <div class="session-container">
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
          <h3>Sessões:</h3>
      </template>
    </div>
    <VDataTable
      :value="this.$store.state.Sessions"
      :paginator="true"
      :rows="15"
      showGridlines
      :resizableColumns="true" 
      columnResizeMode="expand"
      :lazy="true"
      :totalRecords="this.$store.state.SessionsCount"
      ref="dt"
      @page="onPage($event)"
    >
      <VColumn field="user_id" header="User ID"></VColumn>
      <VColumn field="jwt" header="JWT"></VColumn>
    </VDataTable>
  </div>
</template>
<script>
export default {
   methods: {
     onPage(event){
       const data = {
        jwt: `Bearer ${this.jwt}`,
        limit: 15,
        skip: event.page+1,
      };
      this.$store.dispatch("getSessionsPaginate", data);
    },
  },
    mounted(){
    const data = {
        jwt: `Bearer ${this.jwt}`,
        limit: 15,
        skip: 1,
      };
      this.$store.dispatch("getSessionsPaginate", data);
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
.session-container{
  max-width: 100vw !important;
   word-wrap: break-word !important;
}
</style>


