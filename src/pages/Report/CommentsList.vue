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
          @click="getCommentsPaginate"
        />
      </template>
    </VDialog>
    <div class="mb-3 mx-2">
      <template>
        <h3>Comentarios:</h3>
    </template>
    </div>
    <VDataTable
      :value="this.$store.state.Comments"
      :paginator="true"
      :rows="15"
      showGridlines
      :lazy="true"
      :totalRecords="this.$store.state.CommentsCount"
      ref="dt"
      @page="onPage($event)"
    >
      <VColumn field="name" header="Name"></VColumn>
      <VColumn field="email" header="Email"></VColumn>
      <VColumn field="movie_id" header="Movie-ID"></VColumn>
      <VColumn field="date" header="Date"></VColumn>
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
      this.$store.dispatch("getCommentsPaginate", data);
    },
  },
    mounted(){
    const data = {
        jwt: `Bearer ${this.jwt}`,
        limit: 15,
        skip: 1,
      };
      this.$store.dispatch("getCommentsPaginate", data);
  },
  data() {
    return {
      display: false,
      jwt: localStorage.getItem("token"),
      limit: "",
      skip: "",
    };
  },
};
</script>
<style scoped>
</style>


