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
          @click="getMoviesPaginate"
        />
      </template>
    </VDialog>
    <VDialog header="Criar Filme" :visible.sync="displayC">
      <div class="dialog">
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
          @click="createMovie"
        />
      </template>
    </VDialog>
    <VDialog :header="updateMessage" :visible.sync="displayU">
      <div class="dialog">
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
          @click="updateMovie"
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
          @click="deleteMovie"
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
      selectionMode="single"
      @row-select="onRowSelect"
      showGridlines
    >
      <VColumn field="title" header="Title"></VColumn>
      <VColumn field="plot" header="Plot"></VColumn>
      <VColumn field="type" header="Type"></VColumn>
      <VColumn field="year" header="Year"></VColumn>
    </VDataTable>
  </div>
</template>
<script>
export default {
  methods: {
    onRowSelect(event) {
      this.id = event.data._id;
      this.movieName = event.data.title
      this.updateMessage = `Atualizar Filme: ${this.movieName}`;
    },
    getMoviesPaginate() {
      const data = {
        jwt: `Bearer ${this.jwt}`,
        limit: this.limit,
        skip: this.skip,
      };
      this.$store.dispatch("getMoviesPaginate", data);
      this.display = false;
    },
    showData() {
      this.$store.dispatch("getMovies", `Bearer ${this.jwt}`);
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
    deleteMovie() {
      this.$confirm.require({
        message: `Deseja Remover: ${this.movieName}`,
        header: "Confirmação",
        icon: "pi pi-exclamation-triangle",
        acceptLabel: "Deletar",
        rejectLabel: "Cancelar",
        accept: () => {
          const data = {
            id: this.id,
            jwt: `Bearer ${this.jwt}`,
          };
          this.$store.dispatch("deleteMovies", data);
        },
      });
    },
    createMovie() {
      const data = {
        Movies: this.Movies,
        jwt: `Bearer ${this.jwt}`,
      };
      this.$store.dispatch("createMovies", data);
      this.displayC = false;
    },
    updateMovie() {
      const data = {
        Movies: this.Movies,
        jwt: `Bearer ${this.jwt}`,
        id: this.id,
      };
      this.$store.dispatch("updateMovies", data);
      this.displayU = false;
    },
  },
  data() {
    return {
      display: false,
      displayC: false,
      displayU: false,
      jwt: localStorage.getItem("token"),
      limit: "",
      skip: "",
      id: "",
      movieName: "",
      updateMessage: "Nenhum filme selecionado",
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
        lastupdated: "",
      },
    };
  },
};
</script>
<style scoped>
.dialog {
  column-count: 4;
}
</style>