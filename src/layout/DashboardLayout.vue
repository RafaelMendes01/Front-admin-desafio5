<template>
  <div class="wrapper">
    <side-bar>
      <mobile-menu slot="content"></mobile-menu>
      <div @click="toggleSidebar">
        <sidebar-link to="/admin/Overview" @click="toggleSidebar">
          <i class="nc-icon nc-chart-pie-35"></i>
          <p>Overview</p>
        </sidebar-link>
      </div>
      <div @click="toggleSidebar">
        <sidebar-link to="/admin/Movies" @click="toggleSidebar">
          <i class="nc-icon nc-button-play"></i>
          <p>Filmes</p>
        </sidebar-link>
      </div>
      <div @click="toggleSidebar">
        <sidebar-link to="/admin/Theaters" @click="toggleSidebar">
          <i class="nc-icon nc-square-pin"></i>
          <p>Teatros</p>
        </sidebar-link>
      </div>
      <div @click="toggleSidebar">
        <sidebar-link to="/admin/Users" @click="toggleSidebar">
          <i class="nc-icon nc-single-02"></i>
          <p>Usuarios</p>
        </sidebar-link>
      </div>
      <div @click="toggleSidebar">
        <sidebar-link to="/admin/Report/CommentsTable">
          <i class="nc-icon nc-notes"></i>
          <p>Formularios</p>
        </sidebar-link>
      </div>
      <div @click="toggleSidebar">
        <sidebar-link to="/">
          <i class="nc-icon nc-button-power"></i>
          <p>Log-Out</p>
        </sidebar-link>
      </div>
    </side-bar>
    <div class="main-panel">
      <top-navbar></top-navbar>
      <dashboard-content> </dashboard-content>
    </div>
  </div>
</template>
<style lang="scss">
</style>
<script>
import TopNavbar from "./TopNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./Content.vue";
import MobileMenu from "./MobileMenu.vue";
export default {
  components: {
    TopNavbar,
    ContentFooter,
    DashboardContent,
    MobileMenu,
  },
  methods: {
    toggleSidebar() {
      this.$store.state.IsOpenSideBar = "";
      this.$store.state.isClicked = false
    },
  },
  created() {
    this.$toast.add({
      severity: "info",
      summary: "Usuario logado",
      detail: `seja bem vindo a nossa aplicação ${this.$store.state.UserName}`,
      life: 4000,
    });
  },
};
</script>
