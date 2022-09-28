<template>
  <div class="card">
    <VDialog header="Criar Usuario" :visible.sync="displayC">
      <h6>Nome</h6>
      <input type="text" v-model="Users.name" />
      <h6>Email</h6>
      <input type="text" v-model="Users.email" />
      <h6>Senha</h6>
      <input type="text" v-model="Users.password" />
      <template #footer>
        <VButton
          label="Cancelar"
          icon="pi pi-times"
          class="p-button-text"
          @click="hiddenCreateDialog"
        />
        <VButton
          label="Criar"
          icon="pi pi-check"
          autofocus
          @click="createUser"
        />
      </template>
    </VDialog>
    <VDialog header="Atualizar Usuario" :visible.sync="displayU">
      <h6>inserir id</h6>
      <input type="text" v-model="id" />
       <h6>Nome</h6>
      <input type="text" v-model="Users.name" />
      <h6>Email</h6>
      <input type="text" v-model="Users.email" />
      <h6>Senha</h6>
      <input type="text" v-model="Users.password" />
      <template #footer>
        <VButton
          label="Cancelar"
          icon="pi pi-times"
          class="p-button-text"
          @click="hiddenUpdateDialog"
        />
        <VButton
          label="Atualizar"
          icon="pi pi-check"
          autofocus
          @click="updateUser"
        />
      </template>
    </VDialog>
    <div class="mr-4">
      <template>
        <VButton
          label="Listar"
          icon="pi pi-list"
          class="p-button-primary mr-2"
          @click="showData"
        />
        <VButton
          label="Criar"
          icon="pi pi-plus"
          class="p-button-success mr-2"
          @click="showCreateDialog"
        />
        <VButton
          label="Deletar"
          icon="pi pi-trash"
          class="p-button-danger mr-2"
          @click="deleteUser"
        />
        <VButton
          label="Atualizar"
          icon="pi pi-pencil"
          class="p-button-warning"
          @click="showUpdateDialog"
        />
      </template>
    </div>
    <VDataTable
      :value="this.$store.state.Users"
      :paginator="true"
      :rows="10"
      stripedRows
      selectionMode="single"
      @row-select="onRowSelect"
    >
      <VColumn field="name" header="name"></VColumn>
      <VColumn field="email" header="email"></VColumn>
    </VDataTable>
  </div>
</template>
<script>
export default {
  methods: {
    onRowSelect(event){
      this.id = event.data._id
    },
    showData() {
      this.$store.dispatch("getUsers", `Bearer ${this.$store.state.jwtToken}`);
    },
    showCreateDialog() {
      this.displayC = true;
    },
    hiddenCreateDialog() {
      this.displayC = false;
    },
    showUpdateDialog() {
      this.displayU = true;
    },
    hiddenUpdateDialog() {
      this.displayU = false;
    },
    deleteUser() {
      const data = {
        id: this.id,
        jwt: `Bearer ${this.$store.state.jwtToken}`,
      };
      this.$store.dispatch("deleteUsers", data);
    },
    createUser() {
      this.$store.dispatch("createUsers", this.Users);
    },
    updateUser() {
      const data = {
        Users: this.Users,
        jwt: `Bearer ${this.$store.state.jwtToken}`,
        id: this.id
      };
       this.$store.dispatch("updateUsers", data);
    }
  },
  data() {
    return {
      display: false,
      displayC: false,
      displayU: false,
      id: "",
      Users: {
       name: "",
       email: "",
       password: ""
      },
    };
  },
};
</script>
<style scoped>
</style>

