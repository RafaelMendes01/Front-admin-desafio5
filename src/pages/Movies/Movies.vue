<template>
<div class="card">
  <VDialog header="Deletar Usuario" :visible.sync="display" >
  <h6>inserir id</h6>
	<input type="text" v-model="id">
  <template #footer>
		<VButton label="Cancelar" icon="pi pi-times" class="p-button-text" @click="hiddenDeleteDialog"/>
        <VButton label="Deletar" icon="pi pi-check" autofocus @click="deleteMovie" />
	</template>
</VDialog>
  <div class="mr-4">
    <template>
            <VButton label="Listar" icon="pi pi-list" class="p-button-primary mr-2" @click="showData"  />
            <VButton label="Criar" icon="pi pi-plus" class="p-button-success mr-2" />
            <VButton label="Deletar" icon="pi pi-trash" class="p-button-danger mr-2" @click="showDeleteDialog"  />
            <VButton label="Atualizar" icon="pi pi-pencil" class="p-button-warning"  />
        </template>
  </div>
  <VDataTable
    :value="this.$store.state.Movies"
    :paginator="true"
    :rows="6"
    stripedRows
  >
    <VColumn field="_id" header="ID"></VColumn>
    <VColumn field="title" header="Title"></VColumn>
    <VColumn field="type" header="Type"></VColumn>
    <VColumn field="year" header="Year"></VColumn>
  </VDataTable>
</div>
</template>
<script>
export default {
  methods: {
    showData(){
      this.$store.dispatch("getMovies", `Bearer ${this.$store.state.jwtToken}`);
    },
    showDeleteDialog(){
      this.display = true
    },
    hiddenDeleteDialog(){
      this.display = false
    },
    deleteMovie(){
      const data = {
        id: this.id,
        jwt:`Bearer ${this.$store.state.jwtToken}`
      }
      this.$store.dispatch("deleteMovies",data);
    }
  },
  data(){
    return {
      display: false,
      id: ''
    }
  }
};
</script>
<style scoped>
</style>

