<template>
  <v-app dark>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>SWAPI.co</span>
        <span class="font-weight-light">Using VueJS and Vuetify</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>

    <v-content>
      <!-- <HelloWorld/> -->
      <Films/>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Films from './components/Films'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Films
  },
  data () {
    return {
      //
    }
  }
}
</script>

<style scoped>

</style>
