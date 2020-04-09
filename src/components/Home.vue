<template>
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
</template>

<script>
export default {
  computed: {
    notes() {
      return this.$store.getters.notes;
    },
  },
};
</script>
