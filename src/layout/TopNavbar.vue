<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <button type="button"
              class="navbar-toggler navbar-toggler-right"
              :class="{toggled: $sidebar.showSidebar}"
              aria-controls="navigation-index"
              aria-expanded="false"
              aria-label="Toggle navigation"
              @click="toggleSidebar">
        <span class="navbar-toggler-bar burger-lines"></span>
        <span class="navbar-toggler-bar burger-lines"></span>
        <span class="navbar-toggler-bar burger-lines"></span>
      </button>
    </div>
  </nav>
</template>
<script>
  export default {
    methods: {
      toggleSidebar () {
        if(this.$store.state.isClicked === false){
          this.$sidebar.displaySidebar(true)
          this.$store.state.isClicked = true
        }
        else {
          this.$sidebar.displaySidebar(false)
           this.$store.state.isClicked = false
        }
      },
      hideSidebar () {
        this.$sidebar.displaySidebar(false)
      }
    },
  }

</script>
<style>
</style>
