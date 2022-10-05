<template>
  <div class="card">
    <VConfirmDialog> </VConfirmDialog>
    <VDialog header="Criar Filme" :visible.sync="displayC" class="createDialog">
      <div class="dialog my-2">
        <div class="inputField">
          <span class="p-float-label">
            <VInput type="text" v-model="Movies.title" id="Title" />
            <label for="Title">Title</label>
          </span>
          <span class="p-float-label">
            <VInput type="text" v-model="Movies.fullplot" id="Fullplot" />
            <label for="Fullplot">Fullplot</label>
          </span>
          <span class="p-float-label">
            <VInput type="text" v-model="Movies.plot" id="Plot" />
            <label for="Plot">Plot</label>
          </span>
          <span class="p-float-label">
            <VInput type="text" v-model="Movies.poster" id="Poster" />
            <label for="Poster">Poster</label>
          </span>
        </div>

        <div class="inputField">
          <span class="p-float-label">
            <VInput type="text" v-model="Movies.type" id="Type" />
            <label for="Type">Type</label>
          </span>
          <span class="p-float-label">
            <VChips
              v-model="Movies.genres"
              id="Genres"
              :allowDuplicate="false"
              class="arrayInput"
            />
            <label for="Genres">Genres</label>
          </span>
          <span class="p-float-label">
            <VNumber
              v-model="Movies.runtime"
              id="Runtime"
              :useGrouping="false"
            />
            <label for="Runtime">Runtime</label>
          </span>
          <span class="p-float-label">
            <VNumber v-model="Movies.year" id="Year" :useGrouping="false" />
            <label for="Year">Year</label>
          </span>
        </div>

        <div class="inputField">
          <span class="p-float-label">
            <VChips
              v-model="Movies.directors"
              id="Directors"
              :allowDuplicate="false"
              class="arrayInput"
            />
            <label for="Directors">Directors</label>
          </span>
          <span class="p-float-label">
            <VChips
              v-model="Movies.writers"
              id="Writers"
              :allowDuplicate="false"
              class="arrayInput"
            />
            <label for="Writers">Writers</label>
          </span>
          <span class="p-float-label">
            <VChips
              v-model="Movies.countries"
              id="Countries"
              :allowDuplicate="false"
              class="arrayInput"
            />
            <label for="Countries">Countries</label>
          </span>
          <span class="p-float-label">
            <VChips
              v-model="Movies.languages"
              id="Languages"
              :allowDuplicate="false"
              class="arrayInput"
            />
            <label for="Languages">Languages</label>
          </span>
        </div>

        <div class="inputField">
          <span class="p-float-label">
            <VInput type="text" v-model="Movies.rated" />
            <label for="Rated">Rated</label>
          </span>
          <span class="p-float-label">
            <VNumber
              v-model="Movies.metacritic"
              id="Metacritic"
              :useGrouping="false"
              :minFractionDigits="1"
              :maxFractionDigits="1"
              :min="0.0"
              :max="10.0"
            />
            <label for="Metacritic">Metacritic</label>
          </span>
          <span class="p-float-label">
            <VInput type="text" v-model="Movies.released" id="Released" />
            <label for="Released">Released</label>
          </span>
          <span class="p-float-label">
            <VInput
              type="string"
              v-model="Movies.lastupdated"
              id="LastUpdated"
            />
            <label for="LastUpdated">LastUpdated</label>
          </span>
        </div>

        <div class="inputField">
          <VAccordion>
            <VAccordionTab header="Awards">
              <VNumber
                v-model="Movies.awards.nominations"
                :useGrouping="false"
                placeholder="nominations"
                class="mb-2"
              />
              <VInput
                type="text"
                v-model="Movies.awards.text"
                placeholder="text"
                class="mb-2"
              />
              <VNumber
                v-model="Movies.awards.wins"
                :useGrouping="false"
                placeholder="wins"
                class="mb-2"
              />
            </VAccordionTab>
          </VAccordion>
          <VAccordion>
            <VAccordionTab header="Tomatoes">
              <VInput
                type="text"
                v-model="Movies.tomatoes.boxOffice"
                placeholder="boxOffice"
                class="mb-2"
              />
              <VInput
                type="text"
                v-model="Movies.tomatoes.consensus"
                placeholder="consensus"
                class="mb-2"
              />
              <VNumber
                v-model="Movies.tomatoes.critic.meter"
                :useGrouping="false"
                placeholder="critic meter"
                class="mb-2"
              />
              <VNumber
                v-model="Movies.tomatoes.critic.numReviews"
                :useGrouping="false"
                placeholder="critic numRevies"
                class="mb-2"
              />
              <VNumber
                v-model="Movies.tomatoes.critic.rating"
                :useGrouping="false"
                placeholder="critic rating"
                class="mb-2"
              />
              <VInput
                v-model="Movies.tomatoes.dvd"
                :useGrouping="false"
                placeholder="dvd"
                class="mb-2"
              />
              <VNumber
                v-model="Movies.tomatoes.fresh"
                :useGrouping="false"
                placeholder="fresh"
                class="mb-2"
              />
              <VInput
                v-model="Movies.tomatoes.lastUpdated"
                :useGrouping="false"
                placeholder="lastUpdated"
                class="mb-2"
              />
              <VInput
                type="text"
                v-model="Movies.tomatoes.production"
                placeholder="production"
                class="mb-2"
              />
              <VNumber
                v-model="Movies.tomatoes.rotten"
                :useGrouping="false"
                placeholder="rotten"
                class="mb-2"
              />
              <VNumber
                v-model="Movies.tomatoes.viewer.meter"
                :useGrouping="false"
                placeholder="viewer meter"
                class="mb-2"
              />
              <VNumber
                v-model="Movies.tomatoes.viewer.numReviews"
                :useGrouping="false"
                placeholder="viewer numRevies"
                class="mb-2"
              />
              <VNumber
                v-model="Movies.tomatoes.viewer.rating"
                :useGrouping="false"
                placeholder="viewer rating"
                class="mb-2"
              />
              <VInput
                type="text"
                v-model="Movies.tomatoes.website"
                placeholder="website"
                class="mb-2"
              />
            </VAccordionTab>
          </VAccordion>
          <VAccordion>
            <VAccordionTab header="IMDB">
              <VNumber
                v-model="Movies.imdb.id"
                :useGrouping="false"
                placeholder="id"
                class="mb-2"
              />
              <VNumber
                v-model="Movies.imdb.rating"
                :useGrouping="false"
                placeholder="rating"
                class="mb-2"
              />
              <VNumber
                v-model="Movies.imdb.votes"
                :useGrouping="false"
                placeholder="votes"
                class="mb-2"
              />
            </VAccordionTab>
          </VAccordion>
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
          @click="createMovie"
        />
      </template>
    </VDialog>
    <VDialog :header="updateMessage" :visible.sync="displayU">
      <div class="dialog my-2">
        <div class="inputField">
          <span class="p-float-label">
            <VInput type="text" v-model="Movies.title" id="Title" />
            <label for="Title">Title</label>
          </span>
          <span class="p-float-label">
            <VInput type="text" v-model="Movies.fullplot" id="Fullplot" />
            <label for="Fullplot">Fullplot</label>
          </span>
          <span class="p-float-label">
            <VInput type="text" v-model="Movies.plot" id="Plot" />
            <label for="Plot">Plot</label>
          </span>
          <span class="p-float-label">
            <VInput type="text" v-model="Movies.poster" id="Poster" />
            <label for="Poster">Poster</label>
          </span>
        </div>

        <div class="inputField">
          <span class="p-float-label">
            <VInput type="text" v-model="Movies.type" id="Type" />
            <label for="Type">Type</label>
          </span>
          <span class="p-float-label">
            <VChips
              v-model="Movies.genres"
              id="Genres"
              :allowDuplicate="false"
              class="arrayInput"
            />
            <label for="Genres">Genres</label>
          </span>
          <span class="p-float-label">
            <VNumber
              v-model="Movies.runtime"
              id="Runtime"
              :useGrouping="false"
            />
            <label for="Runtime">Runtime</label>
          </span>
          <span class="p-float-label">
            <VNumber v-model="Movies.year" id="Year" :useGrouping="false" />
            <label for="Year">Year</label>
          </span>
        </div>

        <div class="inputField">
          <span class="p-float-label">
            <VChips
              v-model="Movies.directors"
              id="Directors"
              :allowDuplicate="false"
              class="arrayInput"
            />
            <label for="Directors">Directors</label>
          </span>
          <span class="p-float-label">
            <VChips
              v-model="Movies.writers"
              id="Writers"
              :allowDuplicate="false"
              class="arrayInput"
            />
            <label for="Writers">Writers</label>
          </span>
          <span class="p-float-label">
            <VChips
              v-model="Movies.countries"
              id="Countries"
              :allowDuplicate="false"
              class="arrayInput"
            />
            <label for="Countries">Countries</label>
          </span>
          <span class="p-float-label">
            <VChips
              v-model="Movies.languages"
              id="Languages"
              :allowDuplicate="false"
              class="arrayInput"
            />
            <label for="Languages">Languages</label>
          </span>
        </div>

        <div class="inputField">
          <span class="p-float-label">
            <VInput type="text" v-model="Movies.rated" />
            <label for="Rated">Rated</label>
          </span>
          <span class="p-float-label">
            <VNumber
              v-model="Movies.metacritic"
              id="Metacritic"
              :useGrouping="false"
              :minFractionDigits="1"
              :maxFractionDigits="1"
              :min="0.0"
              :max="10.0"
            />
            <label for="Metacritic">Metacritic</label>
          </span>
          <span class="p-float-label">
            <VInput type="text" v-model="Movies.released" id="Released" />
            <label for="Released">Released</label>
          </span>
          <span class="p-float-label">
            <VInput
              type="string"
              v-model="Movies.lastupdated"
              id="LastUpdated"
            />
            <label for="LastUpdated">LastUpdated</label>
          </span>
        </div>

        <div class="inputField">
          <VAccordion>
            <VAccordionTab header="Awards">
              <VNumber
                v-model="Movies.awards.nominations"
                :useGrouping="false"
                placeholder="nominations"
                class="mb-2"
              />
              <VInput
                type="text"
                v-model="Movies.awards.text"
                placeholder="text"
                class="mb-2"
              />
              <VNumber
                v-model="Movies.awards.wins"
                :useGrouping="false"
                placeholder="wins"
                class="mb-2"
              />
            </VAccordionTab>
          </VAccordion>
          <VAccordion>
            <VAccordionTab header="Tomatoes">
              <VInput
                type="text"
                v-model="Movies.tomatoes.boxOffice"
                placeholder="boxOffice"
                class="mb-2"
              />
              <VInput
                type="text"
                v-model="Movies.tomatoes.consensus"
                placeholder="consensus"
                class="mb-2"
              />
              <VNumber
                v-model="Movies.tomatoes.critic.meter"
                :useGrouping="false"
                placeholder="critic meter"
                class="mb-2"
              />
              <VNumber
                v-model="Movies.tomatoes.critic.numReviews"
                :useGrouping="false"
                placeholder="critic numRevies"
                class="mb-2"
              />
              <VNumber
                v-model="Movies.tomatoes.critic.rating"
                :useGrouping="false"
                placeholder="critic rating"
                class="mb-2"
              />
              <VInput
                v-model="Movies.tomatoes.dvd"
                :useGrouping="false"
                placeholder="dvd"
                class="mb-2"
              />
              <VNumber
                v-model="Movies.tomatoes.fresh"
                :useGrouping="false"
                placeholder="fresh"
                class="mb-2"
              />
              <VInput
                v-model="Movies.tomatoes.lastUpdated"
                :useGrouping="false"
                placeholder="lastUpdated"
                class="mb-2"
              />
              <VInput
                type="text"
                v-model="Movies.tomatoes.production"
                placeholder="production"
                class="mb-2"
              />
              <VNumber
                v-model="Movies.tomatoes.rotten"
                :useGrouping="false"
                placeholder="rotten"
                class="mb-2"
              />
              <VNumber
                v-model="Movies.tomatoes.viewer.meter"
                :useGrouping="false"
                placeholder="viewer meter"
                class="mb-2"
              />
              <VNumber
                v-model="Movies.tomatoes.viewer.numReviews"
                :useGrouping="false"
                placeholder="viewer numRevies"
                class="mb-2"
              />
              <VNumber
                v-model="Movies.tomatoes.viewer.rating"
                :useGrouping="false"
                placeholder="viewer rating"
                class="mb-2"
              />
              <VInput
                type="text"
                v-model="Movies.tomatoes.website"
                placeholder="website"
                class="mb-2"
              />
            </VAccordionTab>
          </VAccordion>
          <VAccordion>
            <VAccordionTab header="IMDB">
              <VNumber
                v-model="Movies.imdb.id"
                :useGrouping="false"
                placeholder="id"
                class="mb-2"
              />
              <VNumber
                v-model="Movies.imdb.rating"
                :useGrouping="false"
                placeholder="rating"
                class="mb-2"
              />
              <VNumber
                v-model="Movies.imdb.votes"
                :useGrouping="false"
                placeholder="votes"
                class="mb-2"
              />
            </VAccordionTab>
          </VAccordion>
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
          @click="updateMovie"
        />
      </template>
    </VDialog>
    <div class="header mx-2 my-3">
      <div class="ml-2">
        <p class="text-title mr-2">Filmes:</p>
      </div>
      <div>
        <template>
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
    </div>
    <VDataTable
      :value="this.$store.state.Movies"
      :paginator="true"
      :rows="15"
      selectionMode="single"
      @row-select="onRowSelect"
      showGridlines
      :resizableColumns="true"
      columnResizeMode="fit"
      :lazy="true"
      :totalRecords="this.$store.state.MoviesCount"
      ref="dt"
      @page="onPage($event)"
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
    onPage(event) {
      const data = {
        jwt: `Bearer ${this.jwt}`,
        limit: 15,
        skip: event.page + 1,
      };
      this.skip = data.skip;
      this.$store.dispatch("getMoviesPaginate", data);
    },
    onRowSelect(event) {
      this.id = event.data._id;
      this.movieName = event.data.title;
      this.updateMessage = `Atualizar Filme: ${this.movieName}`;
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
        accept: async  () => {
          const data = {
            id: this.id,
            jwt: `Bearer ${this.jwt}`,
          };
          const data2 = {
            jwt: `Bearer ${this.jwt}`,
            limit: 15,
            skip: this.skip,
          };
          await this.$store.dispatch("deleteMovies", data);
          await this.$store.dispatch("getMoviesPaginate", data2);
        },
      });
    },
    async createMovie() {
      const data = {
        Movies: this.Movies,
        jwt: `Bearer ${this.jwt}`,
      };
      const data2 = {
        jwt: `Bearer ${this.jwt}`,
        limit: 15,
        skip: this.skip,
      };
      await this.$store.dispatch("createMovies", data);
      await this.$store.dispatch("getMoviesPaginate", data2);
      this.displayC = false;
    },
    async updateMovie() {
      const data = {
        Movies: this.Movies,
        jwt: `Bearer ${this.jwt}`,
        id: this.id,
      };
       const data2 = {
        jwt: `Bearer ${this.jwt}`,
        limit: 15,
        skip: this.skip,
      };
      await this.$store.dispatch("updateMovies", data);
      await this.$store.dispatch("getMoviesPaginate", data2);
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
    this.$store.dispatch("getMoviesPaginate", data);
  },
  data() {
    return {
      display: false,
      displayC: false,
      displayU: false,
      jwt: localStorage.getItem("token"),
      skip: undefined,
      id: "",
      movieName: "",
      updateMessage: "Nenhum filme selecionado",
      Movies: {
        awards: {
          nominations: undefined,
          text: "",
          wins: undefined,
        },
        countries: [],
        directors: [],
        fullplot: "",
        genres: [],
        imdb: {
          id: undefined,
          rating: undefined,
          votes: undefined,
        },
        languages: [],
        metacritic: undefined,
        plot: "",
        poster: "",
        rated: "",
        released: "",
        runtime: undefined,
        title: "",
        tomatoes: {
          boxOffice: "",
          consensus: "",
          critic: {
            meter: undefined,
            numReviwes: undefined,
            rating: undefined,
          },
          dvd: "",
          fresh: undefined,
          lastUpdated: "",
          production: "",
          rotten: undefined,
          viewer: {
            meter: undefined,
            numReviews: undefined,
            rating: undefined,
          },
          website: "",
        },
        type: "",
        writers: [],
        year: undefined,
        lastupdated: "",
      },
    };
  },
};
</script>
<style scoped>
.dialog {
  display: flex;
  gap: 1rem;
}
.inputField {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 25%;
}
.arrayInput {
  width: 15rem;
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