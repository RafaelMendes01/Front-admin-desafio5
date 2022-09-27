<template>
  <div class="card">
    <div class="mr-4">
      <template>
        <VButton
          label="Listar Sessoes"
          icon="pi pi-list"
          class="p-button-primary mr-2"
          @click="showSessionsData"
        />
        <VButton
          label="Listar Comentarios"
          icon="pi pi-list"
          class="p-button-success mr-2"
          @click="showCommentsData"
        />
      </template>
    </div>
    <VDataTable
      :value="this.$store.state.Sessions"
      :paginator="true"
      :rows="5"
      stripedRows
    >
      <VColumn field="_id" header="ID"></VColumn>
      <VColumn field="user_id" header="User ID"></VColumn>
      <VColumn field="jwt" header="JWT"></VColumn>
    </VDataTable>
     <VDataTable
      :value="this.$store.state.Comments"
      :paginator="true"
      :rows="5"
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
    showSessionsData() {
      this.$store.dispatch("getSessions", `Bearer ${this.$store.state.jwtToken}`);
    },
    showCommentsData() {
      this.$store.dispatch("getComments", `Bearer ${this.$store.state.jwtToken}`);
    },
  },
  data() {
    return {
    };
  },
};
</script>
<style scoped>
</style>


