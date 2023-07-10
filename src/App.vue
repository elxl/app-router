<template>
  <nav v-if="showNav">
    <router-link :to="{name: 'standard'}">Standard</router-link> |
    <router-link :to="{name:'advance' }">Avancé</router-link> |
    <router-link :to="{name: 'giveway'}">Perte à priorité</router-link>
  </nav>
  <router-view/>
</template>

<script>
export default {
  computed: {
    showNav () {
      return this.$route.path !== '/result'
}
  }

}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
