<template>
  <div class="card">
    <VConfirmDialog> </VConfirmDialog>
     <VDialog header="Limitar Lista" :visible.sync="display">
      <span class="p-float-label mt-2 mb-4">
        <VNumber type="text" v-model="limit" id="Quantidade" />
        <label for="Quantidade">Quantidade</label>
      </span>
      <span class="p-float-label">
        <VNumber type="text" v-model="skip" id="Pagina" />
        <label for="Pagina">Pagina</label>
      </span>
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
          @click="getUsersPaginate"
        />
      </template>
    </VDialog>
    <VDialog header="Criar Usuario" :visible.sync="displayC">
      <div class="dialog mt-2">
        <span class="p-float-label">
          <VInput type="text" v-model="Users.name" id="name" />
          <label for="name">name</label>
        </span>
        <span class="p-float-label">
          <VInput type="text" v-model="Users.email" id="email" />
          <label for="email">email</label>
        </span>
        <span class="p-float-label">
          <VInput type="text" v-model="Users.password" id="password" />
          <label for="password">password</label>
        </span>
      </div>
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
    </VDialog >
    <VDialog :header="updateMessage" :visible.sync="displayU">
      <div class="dialog mt-2">
        <span class="p-float-label">
          <VInput type="text" v-model="Users.name" id="name" />
          <label for="name">name</label>
        </span>
        <span class="p-float-label">
          <VInput type="text" v-model="Users.email" id="email" />
          <label for="email">email</label>
        </span>
        <span class="p-float-label">
          <VInput type="text" v-model="Users.password" id="password" />
          <label for="password">password</label>
        </span>
      </div>
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
   <div class="header mx-2 my-3">
        <div class="ml-2">
           <p class="text-title mr-2">Usuarios:</p>
        </div>
    <div>
      <template>
        <VButton
          label="Listar Todos"
          icon="pi pi-list"
          class="p-button-primary mr-2"
          @click="showData"
        />
        <VButton
          label="Limitar Listagem"
          icon="pi pi-sliders-h"
          class="p-button-info mr-2"
          @click="showPaginateDialog"
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
   </div>
    <VDataTable
      :value="this.$store.state.Users"
      :paginator="true"
      :rows="15"
      showGridlines
      selectionMode="single"
      @row-select="onRowSelect"
      :resizableColumns="true" 
      columnResizeMode="expand"
    >
      <VColumn field="name" header="name"></VColumn>
      <VColumn field="email" header="email"></VColumn>
    </VDataTable>
  </div>
</template>
<script>
export default {
  methods: {
    onRowSelect(event) {
      this.id = event.data._id;
      this.UserName = event.data.name;
      this.updateMessage = `Atualizar Usuario: ${this.UserName}`;
    },
    getUsersPaginate() {
      const data = {
        jwt: `Bearer ${this.jwt}`,
        limit: this.limit,
        skip: this.skip,
      };
      this.$store.dispatch("getUsersPaginate", data);
      this.display = false;
    },
    showData() {
      this.$store.dispatch("getUsers", `Bearer ${this.jwt}`);
    },
    showPaginateDialog() {
      this.display = true;
    },
    hiddenPaginateDialog() {
      this.display = false;
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
      this.$confirm.require({
        message: `Deseja Remover: ${this.UserName}`,
        header: "Confirmação",
        icon: "pi pi-exclamation-triangle",
        acceptLabel: "Deletar",
        rejectLabel: "Cancelar",
        accept: () => {
          const data = {
            id: this.id,
            jwt: `Bearer ${this.jwt}`,
          };
          this.$store.dispatch("deleteUsers", data);
        },
      });
    },
    createUser() {
      this.$store.dispatch("createUsers", this.Users);
      this.displayC = false;
    },
    updateUser() {
      const data = {
        Users: this.Users,
        jwt: `Bearer ${this.jwt}`,
        id: this.id,
      };
      this.$store.dispatch("updateUsers", data);
      this.displayU = false;
    },
  },
  data() {
    return {
      display: false,
      displayC: false,
      displayU: false,
      jwt: localStorage.getItem("token"),
      UserName: "",
      updateMessage: "Nenhum usuario selecionado",
      limit: undefined,
      skip: undefined,
      id: "",
      Users: {
        name: "",
        email: "",
        password: "",
      },
    };
  },
};
</script>
<style scoped>
.dialog {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 1.5rem;
}
.header{
  display: flex;
  justify-content: space-between;
}
.text-title{
  font-weight: bolder;
  font-size: 1.6rem;
  display: inline;
}
</style>

