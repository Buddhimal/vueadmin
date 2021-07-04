<template>
  <div>
    <div class="wrapper">
      <!-- Content Wrapper. Contains page content -->

      <TopHeader/>
      <NavBar/>
      <div class="content-wrapper">
        <router-view></router-view>
      </div>
      <Footer/>
    </div>

  </div>
</template>

<script>

import NavBar from "@/components/NavBar";
import TopHeader from "@/components/TopHeader";
import Footer from "@/components/Footer";

export default {
  name: "HomeLayout",
  components: {
    NavBar,
    TopHeader,
    Footer
  }
}
</script>

<style scoped>

</style>