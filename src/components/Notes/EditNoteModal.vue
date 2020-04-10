<template>
  <v-dialog width="400px" v-model="modal">
    <v-btn class="warning mr-3" flat slot="activator">
      Edit
    </v-btn>
    <v-card>
      <v-container>
        <v-layout row>
          <v-flex xs12>
            <v-card-title>
              <v-text-field
                name="title"
                label="Title"
                type="text"
                v-model="editedTitle"
              ></v-text-field>
            </v-card-title>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
        <v-layout row>
          <v-flex xs12>
            <v-card-text>
              <v-textarea
                name="description"
                label="Description"
                type="description"
                v-model="editedDescription"
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
              >Cancel</v-btn>
              <v-btn
                class="success"
                flat
                @click="onSave"
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
      editedTitle: this.note.title,
      editedDescription: this.note.description,
    };
  },
  methods: {
    onCancel() {
      this.editedDescription = this.note.description;
      this.editedTitle = this.note.title;
      this.modal = false;
    },
    onSave() {
      if (this.note.title !== '' && this.note.description !== '') {
        this.$store.dispatch('updateNote', {
          title: this.editedTitle,
          description: this.editedDescription,
          id: this.note.id,
        });
      }
    },
  },
};
</script>
