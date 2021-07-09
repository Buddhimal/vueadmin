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

      <div v-if="isError" class="alert alert-danger alert-dismissible">
        <h5><i class="icon fas fa-ban"></i> Alert!</h5>
        Error {{ errorMsg }}
      </div>

      <div class="card">
        <div class="card-header">
          <h3 class="card-title">{{ this.$store.state.clients[id].client_name_full }} - Settings</h3>
        </div>
        <!-- /.card-header -->
        <div class="card-body p-0">
          <ul class="products-list product-list-in-card pl-2 pr-2">
            <li class="item" v-for="(org, index) in this.$store.state.clients[id].org_list"
                v-bind:key="org.organization_name_short">
              <div class="product-info">

                <router-link :to="`/client/${id}/organization/${index}`">
                  <a href="javascript:void(0)" class="product-title">{{ org.organization_name_full }}
                  </a>
                </router-link>
                <button v-on:click="removeOrg(org.organization_name_short)" class="btn btn-danger float-right">
                  Remove
                </button>
              </div>
            </li>
          </ul>
          <div class="card-footer">
            <form @submit.prevent="addOrg" action="">
              <div class="input-group">
                <input type="text" name="message" placeholder="Type name ..." v-model="orgName" class="form-control">
                <span class="input-group-append">
                          <button type="submit" class="btn btn-warning">Add</button>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  name: "ClientSettings",
  components: {},
  data() {
    return {
      orgName: "",
      isError: false,
      errorMsg: ""
    }
  },
  props: ["id"],
  methods: {
    async removeOrg(name) {
      this.isError = false;
      const resp = await this.$store.dispatch("removeOrganization", name);
      if (resp.data.success) {
        await this.$store.dispatch("setClients");
      }
    },
    async addOrg() {
      this.isError = false;
      if (this.orgName != "") {
        const resp = await this.$store.dispatch("addOrganization", this.orgName);
        if (resp.data.success) {
          await this.$store.dispatch("setClients");
        } else {
          this.isError = true;
          this.errorMsg = resp.data.message.substring(resp.data.message.indexOf(":"));
        }
      }

    }
  },
  mounted() {
    // this.$root.$emit('updateClient')
  }
}
</script>

<style scoped>

</style>