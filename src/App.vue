<template>
  <div id="app">
    <top content="Batman Shows"></top>
    <router-view></router-view>
    <bottom content="www.BatmanShows.com"></bottom>
  </div>
</template>

<script>
import top from './header.vue'
import bottom from './footer.vue'
export default {
  name: 'app',
  components: {
    top,
    bottom
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
  max-width: 1200px;
  margin: 0 auto;

}
a {
  text-decoration: none;
  color: black;
}

p {
  line-height: 1.8;
}
</style>
