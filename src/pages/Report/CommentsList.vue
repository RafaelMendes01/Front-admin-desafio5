<template>
  <div>
      <template>
        <VButton
          label="Listar Comentarios"
          icon="pi pi-list"
          class="p-button-primary mr-2"
          @click="showCommentsData"
        />
      </template>
     <VDataTable
      :value="this.$store.state.Comments"
      :paginator="true"
      :rows="10"
      stripedRows
    >
      <VColumn field="_id" header="ID"></VColumn>
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
    showCommentsData() {
      this.$store.dispatch("getComments", `Bearer ${this.$store.state.jwtToken}`);
    },
  },
};
</script>
<style scoped>
</style>


