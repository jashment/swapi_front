<template>
  <div>
    <div style="text-align: center;">
      <h1 style="font-size: 3em;">Star Wars Films</h1>
      <v-img :src="images.lightsaber"></v-img>
      <v-btn @click="titleSort()">Sort By Title</v-btn>
      <v-btn @click="episodeSort()">Sort By Episode Number</v-btn>
      <v-btn @click="releaseSort()">Sort By Release Date</v-btn>
    </div>
    <v-container grid-list-md style="text-align: center;">
      <v-layout row wrap>
        <v-flex v-for="films in SWArray" :key="films.title" xs12>
          <v-card>
            <v-card-title primary-title>
              <div style="margin: auto; width: 100%">
                <h1 style="text-align: center; font-size: 2.5em;">{{films.title}}</h1>
                <v-card two-line>
                  <v-card-title>
                    <v-card-text style="font-size: 1.5em;">Episode: {{films.episode_id}}</v-card-text>
                    <v-card-text style="font-size: 1.3em;">Release Date: {{films.release_date}}</v-card-text>
                  </v-card-title>
                </v-card>
                <hr />
                <v-list class="animated fadeInDown">
                  View Details
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
    {{SWArray.sort(function(a, b){return a.release_date - b.release_date})}}-->
  </div>
</template>

<script>
import axios from "axios";
import { axiosMixin } from "../assets/axiosMixin.js";
export default {
  name: "Films",
  mixins: [axiosMixin],
  data() {
    return {
      images: {
        lightsaber: require("../images/star-wars-2369317_1920.png")
      }
    };
  },
  // created () {
  //     console.log(films)
  // },
  methods: {
    titleSort: function() {
      return this.SWArray.sort(function(a, b) {
        var x = a.title.toLowerCase();
        var y = b.title.toLowerCase();
        if (x < y) {
          return -1;
        }
        if (x > y) {
          return 1;
        }
        return 0;
      });
    },
    episodeSort: function() {
      return this.SWArray.sort(function(a, b) {
        return a.episode_id - b.episode_id;
      });
    },
    releaseSort: function() {
      this.SWArray.sort(function(a, b) {
        if (a.release_date < b.release_date) {
          return -1;
        }
        if (a.release_date > b.release_date) {
          return 1;
        }
        return 0;
      });
    }
  }
};
</script>

<style scoped>
</style>
