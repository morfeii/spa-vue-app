<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="text--secondary mb-3">List of Notes</h1>

        <v-card
          class="elevation-10 mb-3"
          v-for="note in myNotes"
          :key="note.id"
        >
          <v-layout row>
            <v-flex xs12>
              <v-card-text>
                <h2 class="text--primary">{{note.title}}</h2>
                <p>{{note.description}}</p>
              </v-card-text>
              <v-card-action>
                <v-spacer></v-spacer>
                <v-btn
                  class="info"
                  :to="'/note/' + note.id"
                >Open</v-btn>
              </v-card-action>

            </v-flex>

          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  computed: {
    myNotes() {
      return this.$store.getters.myNotes;
    },
  },
};
</script>
