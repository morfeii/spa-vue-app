<template>
  <v-card
    color="grey lighten-4"
    flat
    height="200px"
    tile
  >
    <v-navigation-drawer
      app
      temporary
      v-model="drawer"
      >
        <v-list>
          <v-list-item
            v-for="link of links"
            :key="link.title"
            :to="link.url"
          >
            <v-list-item-icon>
              <v-icon left>{{link.icon}}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title v-text="link.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    <v-toolbar color="purple">
      <v-app-bar-nav-icon
        @click="drawer = !drawer"
        class="d-none"
      ></v-app-bar-nav-icon>
      <v-toolbar-title>Notes Application</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
        flat
        v-for="link in links"
        :key="link.title"
        :to="link.url"
        >
          <v-icon left>{{link.icon}}</v-icon>
          Login
        </v-btn>

        <v-btn flat>
          Link Two
        </v-btn>

        <v-btn flat>
          Link Tree
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      links: [
        { title: 'Login', icon: 'mdi-lock', url: '/login' },
      ],
    };
  },
};
</script>
