<template>
  <div id="app">
    <router-view name='vcontent'></router-view>
    <vfooter></vfooter>
  </div>
</template>

<script>
import footer from './components/footer'
export default {
  name: 'app',
  components:{
    'vfooter':footer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
