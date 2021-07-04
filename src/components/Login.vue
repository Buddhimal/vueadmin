<template>
  <div class="hold-transition login-page">
    <div class="login-box">
      <div class="card">
        <div class="card-body login-card-body">
          <p class="login-box-msg">Sign in to start your session</p>

          <form method="post">
            <div class="input-group mb-3">
              <input type="text" class="form-control" placeholder="Email" v-model="input.username" required>
              <div class="input-group-append">
                <div class="input-group-text">
                  <span class="fas fa-envelope"></span>
                </div>
              </div>
            </div>
            <div class="input-group mb-3">
              <input type="password" class="form-control" placeholder="Password" v-model="input.password" required>
              <div class="input-group-append">
                <div class="input-group-text">
                  <span class="fas fa-lock"></span>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-8">
                <div class="icheck-primary">
                  <input type="checkbox" id="remember">
                  <label for="remember">
                    Remember Me
                  </label>
                </div>
              </div>
              <!-- /.col -->
              <div class="col-4">
                <button type="button" v-on:click="login" class="btn btn-primary btn-block">Sign In</button>
              </div>
              <!-- /.col -->
            </div>
          </form>
          <!-- /.social-auth-links -->

          <p class="mb-1">
            <a href="#">Need help in sign in?</a>
          </p>
        </div>
        <!-- /.login-card-body -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      input: {
        username: "",
        password: "",
      }
    }
  },
  methods: {
    login() {
      if (this.input.username == "a" && this.input.password == "a") {
        this.$store.commit("setAuthenticated", true);
        localStorage.setItem("testLogin", true);
        this.$router.replace({name: "home"})
      } else{
        console.log("Username or Password is wrong");
      }
    }
  }
}
</script>

<style scoped>

</style>