<template>
  <div class="card">
    <VConfirmDialog> </VConfirmDialog>
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
          @click="getTheatersPaginate"
        />
      </template>
    </VDialog>
    <VDialog header="Criar Teatro" :visible.sync="displayC">
      <div class="dialog">
        <h6>TheaterId</h6>
        <input type="text" v-model="Theaters.theaterId" />
        <h6>Street1</h6>
        <input type="text" v-model="Theaters.location.address.street1" />
        <h6>Street2</h6>
        <input type="text" v-model="Theaters.location.address.street2" />
        <h6>Zipcode</h6>
        <input type="text" v-model="Theaters.location.address.zipcode" />
        <h6>State</h6>
        <input type="text" v-model="Theaters.location.address.state" />
        <h6>City</h6>
        <input type="text" v-model="Theaters.location.address.city" />
        <h6>Type</h6>
        <input type="text" v-model="Theaters.location.geo.type" />
        <h6>Latitude</h6>
        <input type="text" v-model="Theaters.location.geo.coordinates[0]" />
        <h6>Longitude</h6>
        <input type="text" v-model="Theaters.location.geo.coordinates[1]" />
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
          @click="createTheater"
        />
      </template>
    </VDialog>
    <VDialog :header="updateMessage" :visible.sync="displayU">
      <div class="dialog">
        <h6>TheaterId</h6>
        <input type="text" v-model="Theaters.location.address.theaterId" />
        <h6>Street1</h6>
        <input type="text" v-model="Theaters.location.address.street1" />
        <h6>Street2</h6>
        <input type="text" v-model="Theaters.location.address.street2" />
        <h6>Zipcode</h6>
        <input type="text" v-model="Theaters.location.address.zipcode" />
        <h6>State</h6>
        <input type="text" v-model="Theaters.location.address.state" />
        <h6>City</h6>
        <input type="text" v-model="Theaters.location.address.city" />
        <h6>Type</h6>
        <input type="text" v-model="Theaters.location.geo.type" />
        <h6>Latitude</h6>
        <input type="text" v-model="Theaters.location.geo.coordinates[0]" />
        <h6>Longitude</h6>
        <input type="text" v-model="Theaters.location.geo.coordinates[1]" />
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
          @click="updateTheater"
        />
      </template>
    </VDialog>
    <div class="mx-2 my-3">
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
          @click="deleteTheater"
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
      :value="this.$store.state.Theaters"
      :paginator="true"
      :rows="10"
      showGridlines
      selectionMode="single"
      @row-select="onRowSelect"
    >
      <VColumn field="theaterId" header="Theater-id"></VColumn>
      <VColumn field="location.address.street1" header="Street"></VColumn>
      <VColumn field="location.address.city" header="City"></VColumn>
      <VColumn field="location.geo.coordinates" header="Coordinates"></VColumn>
    </VDataTable>
  </div>
</template>
<script>
export default {
  methods: {
    onRowSelect(event) {
      this.id = event.data._id;
      this.TheaterName = event.data.theaterId;
      this.updateMessage = `Atualizar Teatro: ${this.TheaterName}`;
    },
    showData() {
      this.$store.dispatch("getTheaters", `Bearer ${this.jwt}`);
    },
    getTheatersPaginate() {
      const data = {
        jwt: `Bearer ${this.jwt}`,
        limit: this.limit,
        skip: this.skip,
      };
      this.$store.dispatch("getTheatersPaginate", data);
      this.display = false;
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
    deleteTheater() {
      this.$confirm.require({
        message: `Deseja Remover: ${this.TheaterName}`,
        header: "Confirmação",
        icon: "pi pi-exclamation-triangle",
        acceptLabel: "Deletar",
        rejectLabel: "Cancelar",
        accept: () => {
          const data = {
            id: this.id,
            jwt: `Bearer ${this.jwt}`,
          };
          this.$store.dispatch("deleteTheaters", data);
        },
      });
    },
    createTheater() {
      this.Theaters.location.geo.coordinates[0] = parseFloat(
        this.Theaters.location.geo.coordinates[0]
      );
      this.Theaters.location.geo.coordinates[1] = parseFloat(
        this.Theaters.location.geo.coordinates[1]
      );
      const data = {
        Theaters: this.Theaters,
        jwt: `Bearer ${this.jwt}`,
      };
      this.$store.dispatch("createTheaters", data);
      this.displayC = false;
    },
    updateTheater() {
      this.Theaters.location.geo.coordinates[0] = parseFloat(
        this.Theaters.location.geo.coordinates[0]
      );
      this.Theaters.location.geo.coordinates[1] = parseFloat(
        this.Theaters.location.geo.coordinates[1]
      );
      const data = {
        Theaters: this.Theaters,
        jwt: `Bearer ${this.jwt}`,
        id: this.id,
      };
      console.log(data);
      this.$store.dispatch("updateTheaters", data);
      this.displayU = false;
    },
  },
  data() {
    return {
      display: false,
      displayC: false,
      displayU: false,
      jwt: localStorage.getItem("token"),
      TheaterName: "",
      updateMessage: "Nenhum teatro selecionado",
      limit: "",
      skip: "",
      id: "",
      Theaters: {
        theaterId: "",
        location: {
          address: {
            street1: "",
            street2: "",
            city: "",
            state: "",
            zipcode: "",
          },
          geo: {
            type: "",
            coordinates: [],
          },
        },
      },
    };
  },
};
</script>
<style scoped>
.dialog {
  column-count: 3;
}
</style>