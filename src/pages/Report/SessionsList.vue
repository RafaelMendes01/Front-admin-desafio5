<template>
  <div>
      <template>
        <VButton
          label="Listar Sessoes"
          icon="pi pi-list"
          class="p-button-primary mr-2"
          @click="showSessionsData"
        />
      </template>
    <VDataTable
      :value="this.$store.state.Sessions"
      :paginator="true"
      :rows="10"
      stripedRows
    >
      <VColumn field="_id" header="ID"></VColumn>
      <VColumn field="user_id" header="User ID"></VColumn>
      <VColumn field="jwt" header="JWT"></VColumn>
    </VDataTable>
  </div>
</template>
<script>
export default {
  methods: {
    showSessionsData() {
      this.$store.dispatch("getSessions", `Bearer ${this.$store.state.jwtToken}`);
    },
  },
};
</script>
<style scoped>
</style>


