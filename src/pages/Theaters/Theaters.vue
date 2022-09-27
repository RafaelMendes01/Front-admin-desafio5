<template>
  <div class="card">
    <VDialog header="Deletar Filme" :visible.sync="display">
      <h6>inserir id</h6>
      <input type="text" v-model="id" />
      <template #footer>
        <VButton
          label="Cancelar"
          icon="pi pi-times"
          class="p-button-text"
          @click="hiddenDeleteDialog"
        />
        <VButton
          label="Deletar"
          icon="pi pi-check"
          autofocus
          @click="deleteTheater"
        />
      </template>
    </VDialog>
    <VDialog header="Criar Filme" :visible.sync="displayC">
      <h6>TheaterId</h6>
      <input type="text" v-model="Theaters.theaterId" />
      <h5>Location:</h5>
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
      <h5>Geo:</h5>
      <h6>Type</h6>
      <input type="text" v-model="Theaters.location.geo.type" />
      <h6>Latitude</h6>
      <input type="text" v-model="Theaters.location.geo.coordinates[0]" />
      <h6>Longitude</h6>
      <input type="text" v-model="Theaters.location.geo.coordinates[1]" />
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
    <VDialog header="Atualizar Filme" :visible.sync="displayU">
      <h6>inserir id</h6>
      <input type="text" v-model="id" />
      <h6>TheaterId</h6>
      <input type="text" v-model="Theaters.location.address.theaterId" />
      <h5>Location:</h5>
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
      <h5>Geo:</h5>
      <h6>Type</h6>
      <input type="text" v-model="Theaters.location.geo.type" />
      <h6>Latitude</h6>
      <input type="text" v-model="Theaters.location.geo.coordinates[0]" />
      <h6>Longitude</h6>
      <input type="text" v-model="Theaters.location.geo.coordinates[1]" />
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
          @click="showDeleteDialog"
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
      stripedRows
    >
      <VColumn field="_id" header="ID"></VColumn>
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
    showData() {
      this.$store.dispatch(
        "getTheaters",
        `Bearer ${this.$store.state.jwtToken}`
      );
    },
    showDeleteDialog() {
      this.display = true;
    },
    hiddenDeleteDialog() {
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
      const data = {
        id: this.id,
        jwt: `Bearer ${this.$store.state.jwtToken}`,
      };
      this.$store.dispatch("deleteTheaters", data);
    },
    createTheater() {
      this.Theaters.location.geo.coordinates[0] = parseFloat(this.Theaters.location.geo.coordinates[0]);
      this.Theaters.location.geo.coordinates[1] = parseFloat(this.Theaters.location.geo.coordinates[1]);
      const data = {
        Theaters: this.Theaters,
        jwt: `Bearer ${this.$store.state.jwtToken}`,
      };
      this.$store.dispatch("createTheaters", data);
    },
    updateTheater() {
      this.Theaters.location.geo.coordinates[0] = parseFloat(this.Theaters.location.geo.coordinates[0]);
      this.Theaters.location.geo.coordinates[1] = parseFloat(this.Theaters.location.geo.coordinates[1]);
      const data = {
        Theaters: this.Theaters,
        jwt: `Bearer ${this.$store.state.jwtToken}`,
        id: this.id,
      };
      console.log(data)
      this.$store.dispatch("updateTheaters", data);
    },
  },
  data() {
    return {
      display: false,
      displayC: false,
      displayU: false,
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
</style>

