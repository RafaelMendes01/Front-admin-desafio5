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
          @click="deleteMovie"
        />
      </template>
    </VDialog>
    <VDialog header="Criar Filme" :visible.sync="displayC">
      <h6>Awards</h6>
      <input type="text" v-model="Movies.awards" />
      <h6>Countries</h6>
      <input type="text" v-model="Movies.countries" />
      <h6>Directors</h6>
      <input type="text" v-model="Movies.directors" />
      <h6>Fullplot</h6>
      <input type="text" v-model="Movies.fullPlot" />
      <h6>Genres</h6>
      <input type="text" v-model="Movies.genres" />
      <h6>IMDB</h6>
      <input type="text" v-model="Movies.imdb" />
      <h6>Languages</h6>
      <input type="text" v-model="Movies.languages" />
      <h6>Metacritic</h6>
      <input type="text" v-model="Movies.metacritic" />
      <h6>Plot</h6>
      <input type="text" v-model="Movies.plot" />
      <h6>Poster</h6>
      <input type="text" v-model="Movies.poster" />
      <h6>Rated</h6>
      <input type="text" v-model="Movies.rated" />
      <h6>Released</h6>
      <input type="text" v-model="Movies.released" />
      <h6>Runtime</h6>
      <input type="text" v-model="Movies.runtime" />
      <h6>Title</h6>
      <input type="text" v-model="Movies.title" />
      <h6>Tomatoes</h6>
      <input type="text" v-model="Movies.tomatoes" />
      <h6>Type</h6>
      <input type="text" v-model="Movies.type" />
      <h6>Writers</h6>
      <input type="text" v-model="Movies.writers" />
      <h6>Year</h6>
      <input type="number" v-model="Movies.year" />
       <h6>LastUpdated</h6>
      <input type="string" v-model="Movies.lastupdated" />
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
          @click="createMovie"
        />
      </template>
    </VDialog>
    <VDialog header="Atualizar Filme" :visible.sync="displayU">
      <h6>inserir id</h6>
      <input type="text" v-model="id" />
       <h6>Awards</h6>
      <input type="text" v-model="Movies.awards" />
      <h6>Countries</h6>
      <input type="text" v-model="Movies.countries" />
      <h6>Directors</h6>
      <input type="text" v-model="Movies.directors" />
      <h6>Fullplot</h6>
      <input type="text" v-model="Movies.fullPlot" />
      <h6>Genres</h6>
      <input type="text" v-model="Movies.genres" />
      <h6>IMDB</h6>
      <input type="text" v-model="Movies.imdb" />
      <h6>Languages</h6>
      <input type="text" v-model="Movies.languages" />
      <h6>Metacritic</h6>
      <input type="text" v-model="Movies.metacritic" />
      <h6>Plot</h6>
      <input type="text" v-model="Movies.plot" />
      <h6>Poster</h6>
      <input type="text" v-model="Movies.poster" />
      <h6>Rated</h6>
      <input type="text" v-model="Movies.rated" />
      <h6>Released</h6>
      <input type="text" v-model="Movies.released" />
      <h6>Runtime</h6>
      <input type="text" v-model="Movies.runtime" />
      <h6>Title</h6>
      <input type="text" v-model="Movies.title" />
      <h6>Tomatoes</h6>
      <input type="text" v-model="Movies.tomatoes" />
      <h6>Type</h6>
      <input type="text" v-model="Movies.type" />
      <h6>Writers</h6>
      <input type="text" v-model="Movies.writers" />
      <h6>Year</h6>
      <input type="number" v-model="Movies.year" />
       <h6>LastUpdated</h6>
      <input type="string" v-model="Movies.lastupdated" />
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
          @click="updateMovie"
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
      :value="this.$store.state.Movies"
      :paginator="true"
      :rows="10"
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
    showData() {
      this.$store.dispatch("getMovies", `Bearer ${this.$store.state.jwtToken}`);
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
    deleteMovie() {
      const data = {
        id: this.id,
        jwt: `Bearer ${this.$store.state.jwtToken}`,
      };
      this.$store.dispatch("deleteMovies", data);
    },
    createMovie() {
      const data = {
        Movies: this.Movies,
        jwt: `Bearer ${this.$store.state.jwtToken}`,
      };
      this.$store.dispatch("createMovies", data);
    },
    updateMovie() {
      const data = {
        Movies: this.Movies,
        jwt: `Bearer ${this.$store.state.jwtToken}`,
        id: this.id
      };
       this.$store.dispatch("updateMovies", data);
    }
  },
  data() {
    return {
      display: false,
      displayC: false,
      displayU: false,
      id: "",
      Movies: {
        awards: "",
        countries: "",
        directors: "",
        fullolot: "",
        genres: "",
        imdb: "",
        Languages: "",
        metacritic: "",
        plot: "",
        poster: "",
        rated: "",
        released: "",
        runtime: "",
        title: "",
        tomatoes: "",
        type: "",
        writers: "",
        year: "",
        lastupdated: ""
      },
    };
  },
};
</script>
<style scoped>
</style>

