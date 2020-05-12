<template>
  <div id="app">
    <Header/>
    <div id="nav">
      <Nav/>
    </div>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import 'normalize.css'
import Nav from '@/components/Nav.vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Nav,
    Header,
    Footer
  }
}
</script>

<style lang="scss">
*, *:before, *:after {
  -webkit-box-sizing: border-box;
  box-sizing: border-box
}

#app {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

}

#nav {
  // padding: 30px;
  height: 55px;
  line-height: 25px;
  padding-top: 6px;
  border-bottom: 1px solid black;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
