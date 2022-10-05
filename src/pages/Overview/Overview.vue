<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-xl-4 col-md-6">
          <stats-card>
            <div slot="header" class="icon-primary">
              <i class="nc-icon nc-button-play text-primary"></i>
            </div>
            <div slot="content">
              <p class="card-category">Filmes</p>
              <h4 class="card-title">{{ this.Movies }}</h4>
            </div>
            <div slot="footer">Quantidade de filmes carregados</div>
          </stats-card>
        </div>

        <div class="col-xl-4 col-md-6">
          <stats-card>
            <div slot="header" class="icon-danger">
              <i class="nc-icon nc-square-pin text-danger"></i>
            </div>
            <div slot="content">
              <p class="card-category">Teatros</p>
              <h4 class="card-title">{{ this.Theaters }}</h4>
            </div>
            <div slot="footer">Quantidade de teatros carregados</div>
          </stats-card>
        </div>

        <div class="col-xl-4 col-md-6">
          <stats-card>
            <div slot="header" class="icon-danger">
              <i class="nc-icon nc-single-02 text-warning"></i>
            </div>
            <div slot="content">
              <p class="card-category">Usuarios</p>
              <h4 class="card-title">{{ this.Users }}</h4>
            </div>
            <div slot="footer">Quantidade de usuarios carregados</div>
          </stats-card>
        </div>

        <div class="offset-md-2 col-xl-4 col-md-6">
          <stats-card>
            <div slot="header" class="icon-success">
              <i class="nc-icon nc-quote text-success"></i>
            </div>
            <div slot="content">
              <p class="card-category">Comentarios</p>
              <h4 class="card-title">{{ this.Comments }}</h4>
            </div>
            <div slot="footer">Quantidade de comentarios carregados</div>
          </stats-card>
        </div>

        <div class="col-xl-4 col-md-6">
          <stats-card>
            <div slot="header" class="icon-info">
              <i class="nc-icon nc-tag-content text-info"></i>
            </div>
            <div slot="content">
              <p class="card-category">Sessões</p>
              <h4 class="card-title">{{ this.Sessions }}</h4>
            </div>
            <div slot="footer">Quantidade de sessões carregadas</div>
          </stats-card>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <VCalendar :inline="true" :showWeek="true" />
        </div>

        <div class="col-md-6" v-if="pieChart.data.series[0] !== 0">
          <chart-card :chart-data="pieChart.data" chart-type="Pie">
            <template slot="header">
              <h4 class="card-title">Estatisticas de dados</h4>
              <p class="card-category">Porcentagem de documentos por tabela</p>
            </template>
            <template slot="footer">
              <div class="legend">
                <i class="fa fa-circle text-danger"></i> Comentarios
                <i class="fa fa-circle text-info"></i> Filmes
                <i class="fa fa-circle text-warning"></i> Teatros
              </div>
              <hr />
            </template>
          </chart-card>
        </div>
        <div class="col-md-6" v-else>
          <chart-card
            :chart-data="{
              labels: ['F', 'C', 'T'],
              series: [12, 20, 1],
            }"
            chart-type="Pie"
          >
            <template slot="header">
              <h4 class="card-title">Estatisticas de dados</h4>
              <p class="card-category">Porcentagem de documentos por tabela</p>
            </template>
            <template slot="footer">
              <div class="legend">
                <i class="fa fa-circle text-danger"></i> Comentarios
                <i class="fa fa-circle text-info"></i> Filmes
                <i class="fa fa-circle text-warning"></i> Teatros
              </div>
              <hr />
            </template>
          </chart-card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ChartCard from "src/components/Cards/ChartCard.vue";
import StatsCard from "src/components/Cards/StatsCard.vue";
import LTable from "src/components/Table.vue";

export default {
  components: {
    LTable,
    StatsCard,
    ChartCard,
  },
  data() {
    return {
      pieChart: {
        data: {
          labels: ["F", "C", "T"],
          series: [
            this.$store.state.MoviesCount / 1000,
            this.$store.state.CommentsCount / 1000,
            this.$store.state.TheatersCount / 1000,
          ],
        },
      },
      Movies: "",
      Theaters: "",
      Users: "",
      Comments: "",
      Sessions: "",
    };
  },
  async created() {
    const jwt = localStorage.getItem("token");
    await this.$store.dispatch("getMoviesCount", `Bearer ${jwt}`);
    await this.$store.dispatch("getTheatersCount", `Bearer ${jwt}`);
    await this.$store.dispatch("getUsersCount", `Bearer ${jwt}`);
    await this.$store.dispatch("getCommentsCount", `Bearer ${jwt}`);
    await this.$store.dispatch("getSessionsCount", `Bearer ${jwt}`);
    (this.Movies = await this.$store.state.MoviesCount),
      (this.Theaters = await this.$store.state.TheatersCount),
      (this.Users = await this.$store.state.UsersCount),
      (this.Comments = await this.$store.state.CommentsCount),
      (this.Sessions = await this.$store.state.SessionsCount);
  },
};
</script>
<style>
</style>
