<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 class="text-xs-center" pt-5 v-if="loading">
        <v-progress-circular
          indeterminate
          :size="120"
          :width="5"
          color="blue"
        ></v-progress-circular>
      </v-flex>
      <v-flex xs12 sm6 offset-sm3 v-else-if="!loading && comments.length !== 0">
        <h1 class="text--secondary mb-3">Favorites</h1>
        <v-list-tile
          avatar
          v-for ="fav in comments"
          :key="fav.id"
        >
          <v-list-tile-action>
            <v-checkbox
              @change="markDone"
            >
            </v-checkbox>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{fav.title}}</v-list-tile-title>
            <v-list-tile-sub-title>{{fav.comment}}</v-list-tile-sub-title>
          </v-list-tile-content>
          <v-list-tile-action>
            <v-btn
              :to="'/note/' + fav.id"
              class="primary"
            >Open</v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </v-flex>
      <v-flex xs12 class="text-xs-center" v-else>
        <h1 class ="text--secondary">You have no comments</h1>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  computed: {
    loading() {
      return this.$store.getters.loading;
    },
    comments() {
      return this.$store.getters.comments;
    },
  },
  methods: {
    markDone(fav) {
      // eslint-disable-next-line no-param-reassign
      fav.done = true;
    },
  },
  created() {
    this.$store.dispath('fetchComments');
  },
};
</script>
