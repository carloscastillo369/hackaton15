<template>  
  <div id="nav">
      <Navs/>
  </div>
  <div class="container">
    <router-view/>
  </div>
</template>

<script>
import Navs from "@/components/Navs.vue"
export default {
  components: {
    Navs
  }
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: blue;
}
</style>
