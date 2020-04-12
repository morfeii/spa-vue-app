<template>
  <v-dialog width="400px" v-model="modal">
    <v-btn class="primary mr-3" flat slot="activator">
      Save
    </v-btn>
    <v-card>
      <v-container>
        <h1 class="text--secondary mb-3">Please, add a comment</h1>
        <v-divider></v-divider>
        <v-layout row>
          <v-flex xs12>
            <v-card-title>
              <v-text-field
                name="name"
                label="Your name"
                type="text"
                v-model="name"
              ></v-text-field>
            </v-card-title>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
        <v-layout row>
          <v-flex xs12>
            <v-card-text>
              <v-textarea
                name="comment"
                label="Your comment"
                type="text"
                v-model="comment"
              ></v-textarea>
            </v-card-text>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
        <v-layout row>
          <v-flex xs12>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                class="error"
                flat
                @click="onCancel"
                :disabled="localLoading"
              >Close</v-btn>
              <v-btn
                class="success"
                flat
                @click="onSave"
                :disabled="localLoading"
                :loading="localLoading"
              >Save</v-btn>
            </v-card-actions>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ['note'],
  data() {
    return {
      modal: false,
      name: '',
      comment: '',
    };
  },
  methods: {
    onCancel() {
      this.name = '';
      this.comment = '';
      this.modal = false;
      this.localLoading = false;
    },
    onSave() {
      if (this.name !== '' && this.comment !== '') {
        this.localLoading = true;
        this.$store.dispatch('createComment', {
          name: this.name,
          comment: this.comment,
          noteId: this.note.id,
          ownerId: this.note.ownerId,
        })
          .finally(() => {
            this.name = '';
            this.comment = '';
            this.localLoading = false;
            this.modal = false;
          });
      }
    },
  },
};
</script>
