<template>
  <div class="wrapper">
    <side-bar>
      <mobile-menu slot="content"></mobile-menu>
      <sidebar-link to="/admin/Movies">
        <i class="nc-icon nc-button-play"></i>
        <p>Filmes</p>
      </sidebar-link>
      <sidebar-link to="/admin/Theaters">
        <i class="nc-icon nc-square-pin"></i>
        <p>Teatros</p>
      </sidebar-link>
      <sidebar-link to="/admin/Users">
        <i class="nc-icon nc-single-02"></i>
        <p>Usuarios</p>
      </sidebar-link>
      <sidebar-link to="/admin/Report">
        <i class="nc-icon nc-notes"></i>
        <p>Formularios</p>
      </sidebar-link>
    </side-bar>
    <div class="main-panel">
      <top-navbar></top-navbar>

      <dashboard-content @click="toggleSidebar">

      </dashboard-content>

      <content-footer></content-footer>
    </div>
  </div>
</template>
<style lang="scss">

</style>
<script>
  import TopNavbar from './TopNavbar.vue'
  import ContentFooter from './ContentFooter.vue'
  import DashboardContent from './Content.vue'
  import MobileMenu from './MobileMenu.vue'
  export default {
    components: {
      TopNavbar,
      ContentFooter,
      DashboardContent,
      MobileMenu
    },
    methods: {
      toggleSidebar () {
        if (this.$sidebar.showSidebar) {
          this.$sidebar.displaySidebar(false)
        }
      }
    }
  }

</script>
