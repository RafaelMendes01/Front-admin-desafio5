<template>
  <div class="card">
    <div class="mr-2">
      <div id="change-field">
        <template>
          <VButton
            label="Trocar Tabela"
            icon="pi pi-sync"
            class="p-button-success"
            @click="changeTable"
          />
        </template>
      </div>
      <router-view> </router-view>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    changeTable() {
      if (this.IsSession == false) {
        this.IsSession = true;
        window.location.replace("/#/admin/Report/SessionsTable");
      } else if (this.IsSession == true) {
        this.IsSession = false;
        window.location.replace("/#/admin/Report/CommentsTable");
      }
    },
  },
  data() {
    return {
      IsSession: false,
    };
  },
};
</script>
<style scoped>
#change-field {
  display: flex;
  justify-content: flex-end;
  width: 100%;
}
</style>


