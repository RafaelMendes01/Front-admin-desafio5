<template>
  <div class="card">
    <div class="mr-2">
      <div id="change-field">
        <template>
          <VButton
            :label="title"
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
        this.title = "ir para Comentarios"
        window.location.replace("/#/admin/Report/SessionsTable");
      } else if (this.IsSession == true) {
        this.IsSession = false;
        this.title = "ir para Sessões"
        window.location.replace("/#/admin/Report/CommentsTable");
      }
    },
  },
  data() {
    return {
      IsSession: false,
      title: "ir para Sessões"
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


