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
            <v-textarea
              name="description"
              label="Note description"
              type="text"
              v-model="description"
              :rules="[v => !!v || 'Description is require']"
            ></v-textarea>
          </v-form>
          <v-layout>
            <v-flex xs12>
              <v-spacer></v-spacer>
              <v-btn
                class="success"
                :loading="loading"
                @click="createNote"
                :disabled="!valid || loading"
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
  computed: {
    loading() {
      return this.$store.getters.loading;
    },
  },
  methods: {
    createNote() {
      if (this.$refs.form.validate()) {
        const note = {
          title: this.title,
          description: this.description,
          switch: this.switch1,
        };

        this.$store.dispatch('createNote', note)
          .then(() => {
            this.$router.push('/list');
          })
          .catch(() => {});
      }
    },
  },
};
</script>
