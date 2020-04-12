<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <v-card v-if="!loading">
          <v-card-text>
            <h1 class="text-primary">{{note.title}}</h1>
            <p>{{note.description}}</p>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <addEditNoteModal :note="note" v-if="isOwner"></addEditNoteModal>
            <app-comment-modal :note="note"></app-comment-modal>
          </v-card-actions>
        </v-card>
        <div v-else class="text-xs-center">
          <v-progress-circular
            indeterminate
            :size="120"
            :width="5"
            color="blue"
          ></v-progress-circular>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import EditNoteModal from './EditNoteModal.vue';

export default {
  props: ['id'],
  computed: {
    note() {
      const { id } = this;
      return this.$store.getters.noteById(id);
    },
    loading() {
      return this.$store.getters.loading;
    },
    isOwner() {
      return this.note.ownerId === this.$store.getters.user.id;
    },
  },
  components: {
    addEditNoteModal: EditNoteModal,
  },
};
</script>
