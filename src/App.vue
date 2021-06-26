<template>
  <v-app dark>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>SWAPI.DEV</span>
        <span class="font-weight-light">Using VueJS and Vuetify</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn href="https://github.com/jashment/swapi_front">Project by Jordan Ashment<v-icon>mdi-open-in-new</v-icon></v-btn>
        </v-toolbar-items>
    </v-toolbar>

    <v-content>
      <Films/>
    </v-content>
  </v-app>
</template>

<script>
import Films from './components/Films'

export default {
  name: 'App',
  components: {
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
