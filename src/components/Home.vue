<template>
  <div v-if="!loading">
    <v-container grid-list-lg>
      <v-layout row wrap>
        <v-flex
          xs12
          sm6
          md4
          v-for="note of notes"
          :key="note.id"
        >
          <v-card>
            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">{{note.title}}</h3>
                <div>{{note.description}}</div>
              </div>
            </v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn flat :to="'/note/' + note.id" class="primary">Open</v-btn>
              <v-btn flat class="success">
                <v-icon left>mdi-bookmark-plus</v-icon>
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
  <div v-else>
    <v-container>
      <v-layout row>
        <v-flex xs12 class="text-xs-center pt5">
          <v-progress-circular
            indeterminate
            :size="120"
            :width="5"
            color="blue"
          ></v-progress-circular>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  computed: {
    notes() {
      return this.$store.getters.notes;
    },
    loading() {
      return this.$store.getters.loading;
    },
  },
};
</script>
