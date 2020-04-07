<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="text--secondary mb-3">Favorites</h1>
        <v-list-tile
          avatar
          v-for ="fav in favs"
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
            <v-list-tile-sub-title>{{fav.description}}</v-list-tile-sub-title>
          </v-list-tile-content>
          <v-list-tile-action>
            <v-btn
              :to="'/note/' + fav.id"
              class="primary"
            >Open</v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      favs: [
        {
          id: 1, title: 'dfdsf', description: 'fdsf', done: false,
        },
      ],
    };
  },
  methods: {
    markDone(fav) {
      // eslint-disable-next-line no-param-reassign
      fav.done = true;
    },
  },
};
</script>
