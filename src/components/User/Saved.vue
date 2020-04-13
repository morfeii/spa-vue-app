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
        <h1 class="text--secondary mb-3">Saved Notes</h1>
        <v-list-tile
          class="mb-3"
          v-for ="item in comments"
          :key="item.id"
        >
          <v-list-tile-content>
            <v-list-tile-title class="body-1">
              <span class="body-2">Author:</span>
              {{item.name}}
            </v-list-tile-title>
            <v-list-tile-sub-title class="body-1">
              <span class="body-2">Comment:</span>
              {{item.comment}}
            </v-list-tile-sub-title >
            <v-list-tile-sub-title>{{item.date}}</v-list-tile-sub-title>
          </v-list-tile-content>
          <v-list-tile-action>
            <v-btn
              :to="'/note/' + item.noteId"
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
  created() {
    this.$store.dispatch('fetchComments');
  },
};
</script>
