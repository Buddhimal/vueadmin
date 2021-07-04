<template>
    <!-- Content Wrapper. Contains page content -->
    <div>
      <!-- Content Header (Page header) -->
      <div class="content-header">
        <div class="container-fluid">
          <div class="row mb-2">
            <div class="col-sm-6">
              <h1 class="m-0 text-dark">Client Settings</h1>
            </div><!-- /.col -->
          </div><!-- /.row -->
        </div><!-- /.container-fluid -->
      </div>
      <!-- /.content-header -->

      <div class="col-md-12">
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">{{client && client.client_name_full}}</h3>
          </div>
          <!-- /.card-header -->
          <div class="card-body p-0">
            <ul class="products-list product-list-in-card pl-2 pr-2">
              <li class="item" v-for="org in client.org_list" v-bind:key="org.organization_name_short">
                <div class="product-info">
                  <a href="javascript:void(0)" class="product-title">{{org.organization_name_full}}
                    <button class="btn btn-danger float-right"> Remove</button>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>


    </div>
</template>

<script>

import Vue from "vue";


export default {
  name: "ClientSettings",
  components: {

  },
  data() {
    return {client: undefined}
  },
  methods: {
    getClients() {
      Vue.axios.post('https://uids-a.tutlab.pw/uids/api/v1.0/get_client_org_list_by_user', {
        api_user_id: this.$store.state.api_user_id,
        api_key: this.$store.state.api_key,
        ui_user_id: this.$store.state.ui_user_id,
      }).then((resp) => {
        this.client = resp.data.data[this.$route.params.id];
      })
    }
  },
  mounted() {
    this.getClients();
  }
}
</script>

<style scoped>

</style>