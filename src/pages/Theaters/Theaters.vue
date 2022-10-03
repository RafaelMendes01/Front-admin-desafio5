<template>
  <div class="card mb-3">
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
          @click="getTheatersPaginate"
        />
      </template>
    </VDialog>
    <VDialog header="Criar Teatro" :visible.sync="displayC">
      <div class="dialog mt-3">
        <div class="inputField">
          <span class="p-float-label">
            <VNumber
              type="text"
              v-model="Theaters.theaterId"
              id="TheaterId"
              :useGrouping="false"
            />
            <label for="TheaterId">TheaterId</label>
          </span>
          <span class="p-float-label">
            <VInput
              type="text"
              v-model="Theaters.location.address.street1"
              id="street1"
            />
            <label for="street1">street1</label>
          </span>
          <span class="p-float-label">
            <VInput type="text" v-model="Theaters.location.address.street2" />
            <label for="street2">street2</label>
          </span>
        </div>
        <div class="inputField">
          <span class="p-float-label">
            <VInput
              type="text"
              v-model="Theaters.location.address.zipcode"
              id="zipcode"
            />
            <label for="zipcode">zipcode</label>
          </span>
          <span class="p-float-label">
            <VInput
              type="text"
              v-model="Theaters.location.address.state"
              id="state"
            />
            <label for="state">state</label>
          </span>
          <span class="p-float-label">
            <VInput
              type="text"
              v-model="Theaters.location.address.city"
              id="city"
            />
            <label for="city">city</label>
          </span>
        </div>
        <div class="inputField">
          <span class="p-float-label">
            <VInput
              type="text"
              v-model="Theaters.location.geo.type"
              id="type"
            />
            <label for="type">type</label>
          </span>
          <span class="p-float-label">
            <VInput
              v-model="Theaters.location.geo.coordinates[0]"
              id="latitude"
            />
            <label for="latitude">latitude</label>
          </span>
          <span class="p-float-label">
            <VInput
              v-model="Theaters.location.geo.coordinates[1]"
              id="longitude"
            />
            <label for="longitude">longitude</label>
          </span>
        </div>
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
      <div class="dialog mt-3">
        <div class="inputField">
          <span class="p-float-label">
            <VNumber
              type="text"
              v-model="Theaters.theaterId"
              id="TheaterId"
              :useGrouping="false"
            />
            <label for="TheaterId">TheaterId</label>
          </span>
          <span class="p-float-label">
            <VInput
              type="text"
              v-model="Theaters.location.address.street1"
              id="street1"
            />
            <label for="street1">street1</label>
          </span>
          <span class="p-float-label">
            <VInput type="text" v-model="Theaters.location.address.street2" />
            <label for="street2">street2</label>
          </span>
        </div>
        <div class="inputField">
          <span class="p-float-label">
            <VInput
              type="text"
              v-model="Theaters.location.address.zipcode"
              id="zipcode"
            />
            <label for="zipcode">zipcode</label>
          </span>
          <span class="p-float-label">
            <VInput
              type="text"
              v-model="Theaters.location.address.state"
              id="state"
            />
            <label for="state">state</label>
          </span>
          <span class="p-float-label">
            <VInput
              type="text"
              v-model="Theaters.location.address.city"
              id="city"
            />
            <label for="city">city</label>
          </span>
        </div>
        <div class="inputField">
          <span class="p-float-label">
            <VInput
              type="text"
              v-model="Theaters.location.geo.type"
              id="type"
            />
            <label for="type">type</label>
          </span>
          <span class="p-float-label">
            <VInput
              v-model="Theaters.location.geo.coordinates[0]"
              id="latitude"
            />
            <label for="latitude">latitude</label>
          </span>
          <span class="p-float-label">
            <VInput
              v-model="Theaters.location.geo.coordinates[1]"
              id="longitude"
            />
            <label for="longitude">longitude</label>
          </span>
        </div>
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
    <div class="header mx-2 my-3">
        <div class="ml-2">
           <p class="text-title mr-2">Teatros:</p>
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
    </div>
    <VDataTable
      :value="this.$store.state.Theaters"
      :paginator="true"
      :rows="15"
      showGridlines
      selectionMode="single"
      @row-select="onRowSelect"
      class="mb-5"
      :resizableColumns="true" 
      columnResizeMode="expand"
    >
      <VColumn field="theaterId" header="Theater-id"></VColumn>
      <VColumn field="location.address.street1" header="Street"></VColumn>
      <VColumn field="location.address.city" header="City"></VColumn>
      <VColumn field="location.geo.coordinates" header="Coordinates"></VColumn>
    </VDataTable>
    <l-map class="map" :zoom="2" :center="[51.505, -0.159]" :minZoom="1">>
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="'&copy; <a target='_blank' href='http://osm.org/copyright'>OpenStreetMap</a> contributors'"
      ></l-tile-layer>
      <div v-for="Theater in this.$store.state.Theaters" :key="Theater.theaterId">
        <l-circle
          :lat-lng="Theater.location.geo.coordinates"
          :radius="1"
          :color="'red'"
        >
        <l-tooltip>{{Theater.location.address.city}}</l-tooltip>
        </l-circle>
      </div>
    </l-map>
  </div>
</template>
<script>
import { LMap, LTileLayer, LCircle } from "vue2-leaflet";
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
      limit: undefined,
      skip: undefined,
      id: "",
      Theaters: {
        theaterId: undefined,
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
      LMap,
      LTileLayer,
      LCircle,
    };
  },
};
</script>
<style scoped>
.dialog {
  display: flex;
  gap: 0.8rem;
}
.inputField {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
.map{
  height: 75vh;
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