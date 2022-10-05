<template>
  <div class="card">
    <VConfirmDialog> </VConfirmDialog>
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
    </VDialog>
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
            label="Deletar"
            icon="pi pi-trash"
            class="p-button-danger mr-2"
            @click="deleteUser"
          />
          <VButton
            label="Atualizar"
            icon="pi pi-pencil"
            class="p-button-warning mr-2"
            @click="showUpdateDialog"
          />
           <VButton
            label="Criar"
            icon="pi pi-plus"
            class="p-button-success mr-2"
            @click="showCreateDialog"
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
      :lazy="true"
      :totalRecords="this.$store.state.UsersCount"
      ref="dt"
      @page="onPage($event)"
    >
      <VColumn field="name" header="name"></VColumn>
      <VColumn field="email" header="email"></VColumn>
    </VDataTable>
  </div>
</template>
<script>
export default {
  methods: {
    onPage(event) {
      const data = {
        jwt: `Bearer ${this.jwt}`,
        limit: 15,
        skip: event.page + 1,
      };
      this.skip = data.skip;
      this.$store.dispatch("getUsersPaginate", data);
    },
    onRowSelect(event) {
      this.id = event.data._id;
      this.UserName = event.data.name;
      this.updateMessage = `Atualizar Usuario: ${this.UserName}`;
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
        accept: async () => {
          const data = {
            id: this.id,
            jwt: `Bearer ${this.jwt}`,
          };
          const data2 = {
            jwt: `Bearer ${this.jwt}`,
            limit: 15,
            skip: this.skip,
          };
          await this.$store.dispatch("deleteUsers", data);
          await this.$store.dispatch("getUsersPaginate", data2);
        },
      });
    },
    async createUser() {
       const data2= {
            jwt: `Bearer ${this.jwt}`,
            limit: 15,
            skip: this.skip,
          };
      await this.$store.dispatch("createUsers", this.Users);
      await this.$store.dispatch("getUsersPaginate", data2);
      this.displayC = false;
    },
    async updateUser() {
      const data = {
        Users: this.Users,
        jwt: `Bearer ${this.jwt}`,
        id: this.id,
      };
      const data2 = {
            jwt: `Bearer ${this.jwt}`,
            limit: 15,
            skip: this.skip,
          };
      await this.$store.dispatch("updateUsers", data);
      await this.$store.dispatch("getUsersPaginate", data2)
      this.displayU = false;
    },
  },
  mounted() {
    const data = {
      jwt: `Bearer ${this.jwt}`,
      limit: 15,
      skip: 1,
    };
    this.skip = data.skip;
    this.$store.dispatch("getUsersPaginate", data);
  },
  data() {
    return {
      display: false,
      displayC: false,
      displayU: false,
      jwt: localStorage.getItem("token"),
      UserName: "",
      updateMessage: "Nenhum usuario selecionado",
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
.header {
  display: flex;
  justify-content: space-between;
}
.text-title {
  font-weight: bolder;
  font-size: 1.6rem;
  display: inline;
}
</style>

