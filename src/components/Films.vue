<template>
    <div>
        <v-container grid-list-xl>
          <v-layout row wrap>

            <v-flex v-for="films in SWArray" :key="films.name" xs4>
              <v-card>
                <v-card-title primary-title>
                  <div>
                    <h3 class="headline mb-0">{{films.name}}</h3>
                    <hr>
                      <v-list class="animated fadeInDown">
                        <v-list-group>
                        <v-list-tile>Title: {{films.title}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Episode Number: {{films.episode_id}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Directo: {{films.director}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Producer: {{films.producer}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Release Date: {{films.release_date}}</v-list-tile>
                        </v-list-group>
                      </v-list>
                  </div>
                </v-card-title>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
    </div>
</template>

<script>
import axios from 'axios'
import {axiosMixin} from '../assets/axiosMixin.js'
export default {
    mixins: [axiosMixin],
    created () {
        console.log(films)
    }
}
</script>

<style scoped>

</style>
