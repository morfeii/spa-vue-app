<template>
  <v-app>
    <v-navigation-drawer
      app
      temporary
      v-model="drawer"
    >
      <v-list>
        <v-list-tile
          v-for="link of links"
          :key="link.title"
          :to="link.url"
        >
          <v-list-tile-action>
            <v-icon>{{link.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="link.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar app dark color="primary">
      <v-toolbar-side-icon
        @click="drawer = !drawer"
        class="hidden-md-and-up"
      >
        <v-icon>mdi-menu</v-icon>
      </v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link to="/" tag="span" class="pointer">My Note App</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
          flat
          v-for="link in links"
          :key="link.title"
          :to="link.url"
        >
          <v-icon left>{{link.icon}}</v-icon>
          {{link.title}}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-content>
      <router-view></router-view>
    </v-content>

    <v-tamplate v-if="error">
      <v-snackbar
        :timeout="5000"
        :multi-line="true"
        color="error"
        @input="closeError"
        :value="true"
      >
        {{ error }}
        <v-btn flat dark @click.native="closeError">Close</v-btn>
      </v-snackbar>
    </v-tamplate>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      links: [
        { title: 'Login', icon: 'mdi-lock', url: '/login' },
        { title: 'Registration', icon: 'mdi-account', url: '/registration' },
        { title: 'Favorites', icon: 'mdi-bookmark', url: '/favorites' },
        { title: 'New note', icon: 'mdi-note-plus', url: '/new' },
        { title: 'My notes', icon: 'mdi-note-multiple', url: '/list' },
      ],
    };
  },
  computed: {
    error() {
      return this.$store.getters.error;
    },
  },
  methods: {
    closeError() {
      this.$store.dispatch('clearError');
    },
  },
};
</script>

<style scoped>
  .pointer {
    cursor: pointer
  }
</style>
