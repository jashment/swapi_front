<template>
    <div>
        <h1 style="text-align: center;">Films</h1>
        <v-btn>Sort By Title</v-btn>
        <v-btn>Sort By Episode Number</v-btn>
        <v-btn>Sort By Release Date</v-btn>
        <v-container grid-list-xs>
          <v-layout row wrap>

            <v-flex v-for="films in SWArray" :key="films.title" xs4>
              <v-card>
                <v-card-title primary-title>
                  <div>
                    <h3 class="headline mb-0">{{films.title}}</h3>
                    <v-list two-line>
                    <v-list-tile-content>
                        <v-list-tile-title>{{films.episode_id}}</v-list-tile-title>
                        <v-list-tile-sub-title>Episode</v-list-tile-sub-title>
                        <v-list-tile-title>{{films.release_date}}</v-list-tile-title>
                        <v-list-tile-sub-title>Release Date</v-list-tile-sub-title>
                    </v-list-tile-content>
                    </v-list>
                    <hr>
                      <v-list class="animated fadeInDown">View Details
                        <v-list-group>
                        <v-list-tile>Title: {{films.title}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Episode Number: {{films.episode_id}}</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile>Director: {{films.director}}</v-list-tile>
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
        <!-- {{SWArray.sort(function(a, b){return a.title - b.title})}}
        <br>
        {{SWArray.sort(function(a, b){return a.episode_id - b.episode_id})}}
        <br>
        {{SWArray.sort(function(a, b){return a.release_date - b.release_date})}} -->
    </div>
</template>

<script>
import axios from 'axios'
import {axiosMixin} from '../assets/axiosMixin.js'
export default {
    name: 'Films',
    mixins: [axiosMixin],
    created () {
        console.log(films)
    },
    computed: {
        titleSort: function() {
            return this.SWArray.sort(function(a, b){return a.title - b.title})
        },
        episodeSort: function() {
            return this.SWArray.sort(function(a, b){return a.episode_id - b.episode_id})
        },
        releaseSort: function() {
            this.SWArray.sort(function(a, b){return a.release_date - b.release_date})
        }
    }
}
</script>

<style scoped>

</style>
