<template>
  <div id="app">
    <div class="wrapper">
      <TopHeader/>
      <NavBar/>
      <Home/>
      <Footer/>
    </div>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import TopHeader from './components/TopHeader.vue'
import Home from './components/Home.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    TopHeader,
    Home,
    Footer
  }
}
</script>