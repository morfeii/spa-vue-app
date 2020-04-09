<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="text--secondary mb-3">Create new Note</h1>
          <v-form v-model="valid" ref="form" validation mb-3>
            <v-text-field
              name="title"
              label="Note title"
              type="text"
              v-model="title"
              required
              :rules="[v => !!v || 'Title is require']"
            ></v-text-field>
            <v-text-field
              name="description"
              label="Note description"
              type="text"
              v-model="description"
              multi-line
              :rules="[v => !!v || 'Description is require']"
            ></v-text-field>
          </v-form>
          <v-layout>
            <v-flex xs12>
              <v-switch
                color="primary"
                label="Add to My Notes?"
                v-model="toggle"
              ></v-switch>
            </v-flex>
          </v-layout>
          <v-layout>
            <v-flex xs12>
              <v-spacer></v-spacer>
              <v-btn
                class="success"
                @click="createNote"
                :disabled="!valid"
              >Create Note</v-btn>
            </v-flex>
          </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      description: '',
      toggle: false,
      valid: false,
    };
  },
  methods: {
    createNote() {
      if (this.$refs.form.validate()) {
        const note = {
          title: this.title,
          description: this.description,
          switch: this.switch1,
        };
        console.log(note);
      }
    },
  },
};
</script>
