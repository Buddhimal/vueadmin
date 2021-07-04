<template>
  <!-- Main Sidebar Container -->
  <aside class="main-sidebar sidebar-dark-primary elevation-4">

    <!-- Sidebar -->
    <div class="sidebar">
      <!-- Sidebar user panel (optional) -->
      <div class="user-panel mt-3 pb-3 mb-3 d-flex">
        <div class="image">
          <img src="/assets/dist/img/avatar.png" class="img-circle elevation-2" alt="User Image">
        </div>
        <div class="info">
          <router-link to="/">
            <a class="d-block">Admin</a>
          </router-link>
        </div>
      </div>

      <!-- Sidebar Menu -->
      <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">

          <!--region User-->
          <div v-for="(client, index) in this.$store.state.clients" v-bind:key="client.client_name_short">
            <li class="nav-item">
              <router-link :to="`/client/${index}/settings`">
                <a class="nav-link">
                  <i class="nav-icon fas fa-user fa-2x" style="margin-right: 20px"></i>
                  {{ client.client_name_full }}
                </a>
              </router-link>

            </li>
            <!--region Organization-->
            <div v-for="org in client.org_list"
                 v-bind:key="org.organization_name_short">
              <a class="d-block" style="margin-left: 30px; padding: 10px">
                {{ org.organization_name_full }}
              </a>
              <div style="padding: 10px 30px; display: flex; justify-content: space-around">
                <a>
                  <i class="fa fa-cog fa-2x"></i>
                </a>
                <a>
                  <i class="fa fa-file fa-2x"></i>
                </a></div>
            </div>
          </div>
          <!--endregion-->
        </ul>
        <!--endregion-->
      </nav>
      <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
  </aside>
</template>

<script>

import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(VueAxios, axios);

export default {
  name: "NavBar",
  data() {
    return {clients: undefined}
  },
  methods: {
    getClients() {
      Vue.axios.post(process.env.VUE_APP_API_BASE_URL+'get_client_org_list_by_user', {
        api_user_id: this.$store.state.api_user_id,
        api_key: this.$store.state.api_key,
        ui_user_id: this.$store.state.ui_user_id,
      }).then((resp) => {
        this.$store.commit("setClients", resp.data.data);
        // this.clients = resp.data.data;
      })
    }
  },
  mounted() {
    this.getClients();
    this.$root.$on('updateClient', () => {
      // your code goes here
      this.getClients();
    })
  }
}
</script>

<style scoped>

</style>