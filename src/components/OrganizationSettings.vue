<template>
  <!-- Content Wrapper. Contains page content -->
  <div>
    <!-- Content Header (Page header) -->
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0 text-dark">{{ this.$store.state.clients[clientId].client_name_full }} - Settings</h1>
            <br>
            <h3 class="card-title">{{ this.organizations[orgId].organization_name_full }}</h3>
          </div><!-- /.col -->
        </div><!-- /.row -->
      </div><!-- /.container-fluid -->
    </div>
    <!-- /.content-header -->

    <div v-if="isError" class="alert alert-danger alert-dismissible">
      <h5><i class="icon fas fa-ban"></i> Alert!</h5>
      Error {{ errorMsg }}
    </div>

    <div class="col-md-12 card card-info">
      <div class="card-header">
        <h3 class="card-title">New Scope Include</h3>
      </div>

      <div class="row col-md-12">
        <div style="display: flex; flex: 1; margin-top: 12px">
          <div class="col-md-6">
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">Domain</h3>
              </div>
              <!-- /.card-header -->

              <div class="card-body p-0">
                <div class="card-footer">
                  <div style="margin-bottom: 12px" v-for="(domain, index) in this.include.domain" v-bind:key="index">
                    <div class="input-group">
                      <input type="text" name="message" disabled :value="`${domain.data_value}`" class="form-control">
                      <span class="input-group-append">
                    <button type="submit" class="btn btn-danger">Remove</button>
                  </span>
                    </div>
                  </div>
                  <form @submit.prevent="addDomain('include')" action="">
                    <div class="input-group">
                      <input type="text" name="message" placeholder="Type domain ..." v-model="newIncludeDomain"
                             class="form-control">
                      <span class="input-group-append">
                    <button type="submit" class="btn btn-primary">Add</button>
                  </span>
                    </div>
                  </form>
                </div>
              </div>

            </div>
          </div>
          <!--      </div>-->
          <div class="col-md-6">
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">IP Address</h3>
              </div>
              <!-- /.card-header -->

              <div class="card-body p-0">
                <div class="card-footer">
                  <div style="margin-bottom: 12px" v-for="(ip, index) in this.include.ip" v-bind:key="index">
                    <div class="input-group">
                      <input type="text" name="message" disabled :value="`${ip.data_value}`" class="form-control">
                      <span class="input-group-append">
                    <button type="submit" class="btn btn-danger">Remove</button>
                  </span>
                    </div>
                  </div>
                  <form @submit.prevent="addIP('include')" action="">
                    <div class="input-group">
                      <input type="text" name="message" placeholder="Type IP ..." class="form-control"
                             v-model="newIncludeIp">
                      <span class="input-group-append">
                    <button type="submit" class="btn btn-primary">Add</button>
                  </span>
                    </div>
                  </form>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>

    <!--        -----------Exclude-------        -->

    <div class="col-md-12 card card-info">
      <div class="card-header">
        <h3 class="card-title">New Scope Exclude</h3>
      </div>

      <div class="row col-md-12">
        <div style="display: flex; flex: 1; margin-top: 12px">
          <div class="col-md-6">
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">Domain</h3>
              </div>
              <!-- /.card-header -->

              <div class="card-body p-0">
                <div class="card-footer">
                  <div style="margin-bottom: 12px" v-for="(domain, index) in this.exclude.domain" v-bind:key="index">
                    <div class="input-group">
                      <input type="text" name="message" disabled :value="`${domain.data_value}`" class="form-control">
                      <span class="input-group-append">
                    <button type="submit" class="btn btn-danger">Remove</button>
                  </span>
                    </div>
                  </div>
                  <form @submit.prevent="addDomain('exclude')" action="">
                    <div class="input-group">
                      <input type="text" name="message" placeholder="Type domain ..." v-model="newExcludeDomain"
                             class="form-control">
                      <span class="input-group-append">
                    <button type="submit" class="btn btn-primary">Add</button>
                  </span>
                    </div>
                  </form>
                </div>
              </div>

            </div>
          </div>
          <!--      </div>-->
          <div class="col-md-6">
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">IP Address</h3>
              </div>
              <!-- /.card-header -->

              <div class="card-body p-0">
                <div class="card-footer">
                  <div style="margin-bottom: 12px" v-for="(ip, index) in this.exclude.ip" v-bind:key="index">
                    <div class="input-group">
                      <input type="text" name="message" disabled :value="`${ip.data_value}`" class="form-control">
                      <span class="input-group-append">
                    <button type="submit" class="btn btn-danger">Remove</button>
                  </span>
                    </div>
                  </div>
                  <form @submit.prevent="addIP('exclude')" action="">
                    <div class="input-group">
                      <input type="text" name="message" placeholder="Type IP ..." class="form-control"
                             v-model="newExcludeIp">
                      <span class="input-group-append">
                    <button type="submit" class="btn btn-primary">Add</button>
                  </span>
                    </div>
                  </form>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>

import Vue from "vue";

export default {
  name: "OrganizationSettings",
  components: {},
  data() {
    return {
      newIncludeDomain: "",
      newExcludeDomain: "",
      newIncludeIp: "",
      newExcludeIp: "",
      isError: false,
      errorMsg: "",
      organizations: [],
      include: [],
      exclude: []
    }
  },
  props: ["clientId", "orgId"],
  watch: {
    '$route.params': {
      handler(newValue) {
        console.log(newValue);
        this.initValues();
        this.getIncludes();
      },
      immediate: true,
    }
  },
  methods: {
    initValues() {
      this.newIncludeDomain = "";
      this.newExcludeDomain = "";
      this.newIncludeIp = "";
      this.newExcludeIp = "";
      this.isError = false;
      this.errorMsg = "";
      this.include = [];
      this.exclud = [];
    },
    getIncludes() {
      Vue.axios.post(process.env.VUE_APP_API_BASE_URL + 'get_scope_data_by_client_org', {
        api_user_id: this.$store.state.api_user_id,
        api_key: this.$store.state.api_key,
        ui_user_id: this.$store.state.ui_user_id,
        client_name_short: this.$store.state.client_name_short,
        organization_name_short: this.organizations[this.orgId].organization_name_short,
        scope: "osint",
        data_group: "assets",
        data_category: "",
        data_type: ""
      }).then((resp) => {
        if (resp.data.data.osint.assets.include)
          this.include = resp.data.data.osint.assets.include;
        if (resp.data.data.osint.assets.exclude)
          this.exclude = resp.data.data.osint.assets.exclude;
      })
    },
    addScope(includes, excludes) {
      Vue.axios.post(process.env.VUE_APP_API_BASE_URL + 'add_scope', {
        api_user_id: this.$store.state.api_user_id,
        api_key: this.$store.state.api_key,
        ui_user_id: this.$store.state.ui_user_id,
        client_name_short: this.$store.state.client_name_short,
        organization_name_short: this.organizations[this.orgId].organization_name_short,
        new_scope: {
          scope_name: "osint",
          scope_data: {
            assets: {
              include: includes,
              exclude: excludes
            },
            testing_parameters: {
              interactive_testing: "false",
              service_data_scraping: "false",
              testing_date_start: "2019-12-28 00:00:00",
              testing_date_end: "2020-12-28 23:59:59",
              testing_window_weekly: [
                {
                  day: 0,
                  hour_start: "00:00:00",
                  hour_end: "23:59:59"
                },
                {
                  day: 1,
                  hour_start: "00:00:00",
                  hour_end: "23:59:59"
                },
                {
                  day: 2,
                  hour_start: "00:00:00",
                  hour_end: "23:59:59"
                },
                {
                  day: 3,
                  hour_start: "00:00:00",
                  hour_end: "23:59:59"
                },
                {
                  day: 4,
                  hour_start: "00:00:00",
                  hour_end: "23:59:59"
                },
                {
                  day: 5,
                  hour_start: "00:00:00",
                  hour_end: "23:59:59"
                },
                {
                  day: 6,
                  hour_start: "00:00:00",
                  hour_end: "23:59:59"
                }
              ]
            }
          }
        }
      }).then(() => {
        this.getIncludes();
      })
    },
    addDomain(type) {
      if (type === 'include') {
        const data = {
          domain: [
            this.newIncludeDomain
          ],
          ip: []
        };
        this.addScope(data, {});
        this.newIncludeDomain = '';
      }
      if (type === 'exclude') {
        const data = {
          domain: [
            this.newExcludeDomain
          ],
          ip: []
        };
        this.addScope({}, data);
        this.newExcludeDomain = '';
      }

    },
    addIP(type) {
      if (type === 'include') {
        const data = {
          domain: [],
          ip: [this.newIncludeIp]
        };
        this.addScope(data, {});
        this.newIncludeIp = '';
      }
      if (type === 'exclude') {
        const data = {
          domain: [],
          ip: [this.newExcludeIp]
        };
        this.addScope({}, data);
        this.newExcludeIp = '';
      }
    }
  },
  async mounted() {
    this.organizations = await this.$store.state.clients[this.clientId].org_list;
    this.getIncludes();
  }
}
</script>

<style scoped>

</style>