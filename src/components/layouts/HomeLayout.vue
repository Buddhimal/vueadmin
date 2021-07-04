<template>
  <div>
    <div class="wrapper">
      <TopHeader/>
      <NavBar/>
      <slot/>
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